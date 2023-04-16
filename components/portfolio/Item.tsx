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

function Item({ image, content }: Props) {
  const isOpen = useSignal(false);

  const colorHandler = multi<string, ItemImage>(
    (i) => i.imageColor,
    method("normal", () => tw``),
    method("invert", () => tw``),
    method("grayscale", () => tw`grayscale`),
  )();
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
        <Image
          class={`transition-all duration-[250] ease-out ${
            colorHandler(image)
          } ${hoverHandler(image)}`}
          src={image.src}
          alt={image.alt}
          width={215}
          height={215}
        />
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
