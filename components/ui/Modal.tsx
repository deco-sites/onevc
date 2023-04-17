import { IS_BROWSER } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import Button from "deco-sites/onevc/components/ui/Button.tsx";
import Container from "deco-sites/onevc/components/ui/Container.tsx";
import type { JSX } from "preact";
import { useEffect, useRef } from "preact/hooks";

// Lazy load a <dialog> polyfill.
if (IS_BROWSER && typeof window.HTMLDialogElement === "undefined") {
  await import(
    "https://raw.githubusercontent.com/GoogleChrome/dialog-polyfill/5033aac1b74c44f36cde47be3d11f4756f3f8fda/dist/dialog-polyfill.esm.js"
  );
}

export type Props = JSX.IntrinsicElements["dialog"] & {
  title?: string;
  onClose?: () => Promise<void> | void;
  loading?: "lazy" | "eager";
  backgroundColor?: string;
};

const buttonLinesStyles =
  "absolute bg-black h-[2px] w-full right-0 transition-all duration-[250ms] ease-out";

const Modal = ({
  open,
  title,
  backgroundColor,
  onClose,
  children,
  loading,
  ...props
}: Props) => {
  const lazy = useSignal(false);
  const animate = useSignal(false);
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open === false) {
      animate.value = false;

      setTimeout(() => {
        document.getElementsByTagName("body").item(0)?.removeAttribute(
          "no-scroll",
        );
        ref.current?.open === true && ref.current.close();
      }, 800);
    } else if (open === true) {
      document.getElementsByTagName("body").item(0)?.setAttribute(
        "no-scroll",
        "",
      );
      ref.current?.open === false && ref.current.showModal();
      lazy.value = true;
      animate.value = true
    }
  }, [open]);

  return (
    <dialog
      {...props}
      ref={ref}
      class={`bg-transparent p-0 m-0 max-w-full w-full max-h-full h-full animate-fade-in ${
        props.class ?? ""
      }`}
      onClick={(e) =>
        (e.target as HTMLDialogElement).tagName === "SECTION" && onClose?.()}
      // @ts-expect-error - This is a bug in types.
      onClose={onClose}
    >
      <div class="flex justify-center">
        <section class="h-full flex bg-transparent justify-start items-start">
          <Container
            class={`override:${
              animate.value ? "open-modal" : "close-modal"
            } override:(px-0 mx-0 md:(px-[28px] top-[28px])) transition-modal relative origin-top-left`}
          >
            <div class={`bg-[${backgroundColor ?? "rgba(85,85,85,0.96)"}]`}>
              <div
                class={`overflow-y-auto flex-grow flex flex-col relative w-full transition-opacity duration-[250ms] ${
                  open ? "delay-700" : ""
                } ${animate.value ? "opacity-100" : "opacity-0"}`}
              >
                <Button
                  variant="icon"
                  aria-label="close modal"
                  onClick={onClose}
                  class="w-[35px] h-[35px] block absolute top-[10px] right-[10px] md:top-[25px] md:right-[25px]"
                >
                  <div
                    class={`${buttonLinesStyles} bg-white top-[50%] -rotate-45`}
                  />
                  <div
                    class={`${buttonLinesStyles} bottom-0 bg-white top-[50%] rotate-45`}
                  />
                </Button>
                {loading === "lazy" ? lazy.value && children : children}
              </div>
            </div>
          </Container>
        </section>
      </div>
    </dialog>
  );
};

export default Modal;
