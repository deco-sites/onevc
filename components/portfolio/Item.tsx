import { useSignal } from "@preact/signals";
import Button from "deco-sites/onevc/components/ui/Button.tsx";
import Modal from "deco-sites/onevc/components/ui/Modal.tsx";
import { method, multi } from "deco-sites/onevc/sdk/multi.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { tw } from "twind/css";
import { ItemModal } from "./ItemModal.tsx";
import type { ItemImage, LabelessItem as Props } from "./types.ts";

//   imageColor: "normal" | "invert" | "grayscale";
//   hoverStyle: "none" | "zoom-in" | "button";

export const colorHandler = multi<string, ItemImage>(
  (i) => i.imageColor,
  method("normal", () => tw``),
  method("invert", () => tw``),
  method("grayscale", () => tw`grayscale`),
)();

function Item({ image, content }: Props) {
  const isOpen = useSignal(false);

  const hoverHandler = multi<string, ItemImage>(
    (i) => i.hoverStyle,
    method("none", () => tw``),
    method(
      "zoom-in",
      () => tw`group-hover:(scale-110 grayscale-0 opacity-100) opacity-75`,
    ),
    method("button", () => tw``),
  )();

  return (
    <>
      <Button
        variant="icon"
        onClick={() => isOpen.value = true}
        class={`flex rounded-none flex-col gap-4 h-full w-full items-center group`}
      >
        <div class="relative">
          {image.hoverStyle === "button"
            ? (
              <div class="lg:(flex items-center justify-center absolute top-0 left-0 group-hover:(h-full) w-full overflow-hidden h-[0%] z-10 bg-[rgba(85,85,85,0.92)] transition-all duration-[250ms] ease-out) hidden">
                <p class="inline-block px-[29px] py-[16px] border-1 border-white text-white font-bold text-[12px]">
                  {image.buttonLabel}
                </p>
              </div>
            )
            : null}
          <Image
            class={`transition-all duration-[250] ease-out ${
              colorHandler(image)
            } ${hoverHandler(image)}`}
            src={image.src}
            alt={image.alt}
            width={215}
            height={215}
          />
        </div>
        {image.label ? <p class="">{image.label}</p> : null}
        {image.subLabel ? <p class="">{image.subLabel}</p> : null}
      </Button>
      <Modal
        mode="center"
        open={isOpen.value}
        onClose={() => {
          isOpen.value = false;
        }}
      >
        <ItemModal image={image} content={content} />
      </Modal>
    </>
  );
}

export default Item;
