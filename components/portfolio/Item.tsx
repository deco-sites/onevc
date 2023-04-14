import Button from "deco-sites/onevc/components/ui/Button.tsx";
import Modal from "deco-sites/onevc/components/ui/Modal.tsx";
import Image from "deco-sites/std/components/Image.tsx";
import { tw } from "twind/css";
import { ItemModal } from "./ItemModal.tsx";
import type { Item as ItemProps } from "./types.ts";
import { useSignal } from "@preact/signals";
//   imageColor: "normal" | "invert" | "grayscale";
//   hoverStyle: "none" | "zoom-in" | "button";

interface Props extends ItemProps {
  width: number;
}

function Item({ image, content, width }: Props) {
  const isOpen = useSignal(false);

  const colorClasses = tw``;
  const hoverClasses = tw``;

  return (
    <>
      <Button
        variant="icon"
        onClick={() => isOpen.value = true}
        class={`flex rounded-none flex-col gap-4 h-auto! items-center w-[${width}%] ${colorClasses} ${hoverClasses}`}
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
