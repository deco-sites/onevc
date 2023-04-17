import { useSignal } from "@preact/signals";
import Button from "deco-sites/onevc/components/ui/Button.tsx";
import Modal from "deco-sites/onevc/components/ui/Modal.tsx";
import { method, multi } from "deco-sites/onevc/sdk/multi.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { tw } from "twind/css";
import { ItemModal } from "./ItemModal.tsx";
import type {
  HoverStyle,
  ImageColor,
  ItemImage,
  LabelessItem as Props,
} from "./types.ts";

export const colorHandler = multi<ItemImage, ImageColor, string>(
  (i) => i.imageColor,
  method("invert" as ImageColor, () => tw`invert brightness-0`),
  method("grayscale" as ImageColor, () => tw`grayscale`),
)(() => "");

function Item({ image, content }: Props) {
  const isOpen = useSignal(false);

  return (
    <>
      <Button
        variant="icon"
        onClick={() => isOpen.value = true}
        class={`flex rounded-none flex-col h-full w-full items-center group gap-0`}
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
            } ${
              image.hoverStyle === "zoom-in"
                ? "group-hover:(scale-110 grayscale-0 opacity-100) opacity-75"
                : ""
            }`}
            src={image.src}
            alt={image.alt}
            width={215}
            height={215}
          />
        </div>
        {image.label
          ? (
            <p class="lg:(text-[22px] mt-[13px] mb-[7px]) mt-[7px] mb-[5px] text-[18px] leading-[20px] font-bold">
              {image.label}
            </p>
          )
          : null}
        {image.subLabel
          ? (
            <p class="font-medium lg:text-[15px] text-[11px]">
              {image.subLabel}
            </p>
          )
          : null}
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
