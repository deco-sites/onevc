import Button from "deco-sites/onevc/components/ui/Button.tsx";
import Modal from "deco-sites/onevc/components/ui/Modal.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import { ItemModal } from "./ItemModal.tsx";
import type { LabelessItem as Props } from "./types.ts";
import { useSignal } from "@preact/signals";
//   imageColor: "normal" | "invert" | "grayscale";
//   hoverStyle: "none" | "zoom-in" | "button";

function Item({ image, content }: Props) {
  const isOpen = useSignal(false);

  const colorClasses = ``;
  const hoverClasses = ``;

  return (
    <>
      <Button
        variant="icon"
        onClick={() => isOpen.value = true}
        class={`flex rounded-none flex-col gap-4 h-full w-full items-center ${colorClasses} ${hoverClasses}`}
      >
        <Image
          class=""
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
