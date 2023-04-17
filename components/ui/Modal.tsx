import { IS_BROWSER } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";
import Button from "deco-sites/onevc/components/ui/Button.tsx";
import Text from "deco-sites/onevc/components/ui/Text.tsx";
import type { JSX } from "preact";
import { useEffect, useRef } from "preact/hooks";

import Icon from "./Icon.tsx";

// Lazy load a <dialog> polyfill.
if (IS_BROWSER && typeof window.HTMLDialogElement === "undefined") {
  await import(
    "https://raw.githubusercontent.com/GoogleChrome/dialog-polyfill/5033aac1b74c44f36cde47be3d11f4756f3f8fda/dist/dialog-polyfill.esm.js"
  );
}

export type Props = JSX.IntrinsicElements["dialog"] & {
  title?: string;
  mode?: "sidebar-right" | "sidebar-left" | "center";
  onClose?: () => Promise<void> | void;
  loading?: "lazy" | "eager";
  backgroundColor?: string;
};

const dialogStyles = {
  "sidebar-right": "animate-slide-left",
  "sidebar-left": "animate-slide-right",
  center: "animate-fade-in",
};

const sectionStyles = {
  "sidebar-right": "justify-end",
  "sidebar-left": "justify-start",
  center: "justify-center items-center",
};

const containerStyles = {
  "sidebar-right": "h-full w-full sm:(max-w-lg)",
  "sidebar-left": "h-full w-full sm:(max-w-lg)",
  center: "",
};

const buttonLinesStyles =
  "absolute bg-black h-[2px] w-full right-0 transition-all duration-[250ms] ease-out";

const Modal = ({
  open,
  title,
  mode = "sidebar-right",
  backgroundColor,
  onClose,
  children,
  loading,
  ...props
}: Props) => {
  const lazy = useSignal(false);
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open === false) {
      document.getElementsByTagName("body").item(0)?.removeAttribute(
        "no-scroll",
      );
      ref.current?.open === true && ref.current.close();
    } else if (open === true) {
      document.getElementsByTagName("body").item(0)?.setAttribute(
        "no-scroll",
        "",
      );
      ref.current?.open === false && ref.current.showModal();
      lazy.value = true;
    }
  }, [open]);

  return (
    <dialog
      {...props}
      ref={ref}
      class={`bg-transparent p-0 m-0 max-w-full w-full max-h-full h-full ${
        dialogStyles[mode]
      } ${props.class ?? ""}`}
      onClick={(e) =>
        (e.target as HTMLDialogElement).tagName === "SECTION" && onClose?.()}
      // @ts-expect-error - This is a bug in types.
      onClose={onClose}
    >
      <section
        class={`w-full h-full flex bg-transparent ${sectionStyles[mode]}`}
      >
        <div
          class={`bg-default flex flex-col max-h-full relative ${
            containerStyles[mode]
          }`}
        >
          <Button
            variant="icon"
            aria-label="close modal"
            onClick={onClose}
            class="lg:w-[48px] w-[35px] block relative h-[38px] absolute top-0 right-0"
          >
            <div
              class={`${buttonLinesStyles} bg-white top-[50%] -rotate-45`}
            />
            <div
              class={`${buttonLinesStyles} bottom-0 bg-white top-[50%] rotate-45`}
            />
          </Button>
          <div class="overflow-y-auto flex-grow flex flex-col">
            {loading === "lazy" ? lazy.value && children : children}
          </div>
        </div>
      </section>
    </dialog>
  );
};

export default Modal;
