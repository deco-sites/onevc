import { useSignal } from "@preact/signals";
import Button from "deco-sites/onevc/components/ui/Button.tsx";
import Modal from "deco-sites/onevc/components/ui/Modal.tsx";
import { method, multi } from "deco-sites/onevc/sdk/multi.ts";
import { usePortfolioTab } from "deco-sites/onevc/sdk/useUI.ts";
import Image from "deco-sites/std/components/Image.tsx";
import { useState } from "preact/compat";
import { tw } from "twind/css";
import { PortfolioModal } from "./PortfolioModal.tsx";
import type { ImageColor, ItemImage, LabelessItem } from "./types.ts";

export interface Props extends LabelessItem {
  _class: string;
  index: number;
  shouldRespectsFilter: boolean;
}

export const colorHandler = multi<ItemImage, ImageColor, string>(
  (i) => i.imageColor,
  method("invert" as ImageColor, () => tw`white-image`),
  method("grayscale" as ImageColor, () => tw`grayscale`),
)(() => "");

export function Item(
  { image, content, filterKey, index, _class, shouldRespectsFilter }: Props,
) {
  const [top] = useState(Math.floor(Math.random() * 40));
  const [duration] = useState(
    ((Math.random() * (5 - 2 + 1) + 2) / 10).toFixed(4),
  );
  const isOpen = useSignal(false);

  const portfolioTab = usePortfolioTab();

  const show = portfolioTab.value === filterKey && shouldRespectsFilter ||
    !shouldRespectsFilter;

  const transitionClass = tw(() => ({
    "-webkit-transition":
      `opacity ${duration}s ease-out ${duration}s, top ${duration}s ease-out ${duration}s`,
    "transition":
      `opacity ${duration}s ease-out ${duration}s, top ${duration}s ease-out ${duration}s`,
  }));
  const animateClasses = show
    ? tw`opacity-100 top-0`
    : tw`opacity-0 top-[${top}px]`;

  return (
    <li
      class={`${_class} relative ${transitionClass} ${animateClasses} ${
        show ? "visible" : "invisible override:(h-0 w-0)"
      }`}
      aria-hidden={show.toString() as "true" | "false"}
    >
      {show
        ? (
          <>
            <Button
              variant="icon"
              onClick={() => isOpen.value = true}
              class={`flex rounded-none flex-col h-full w-full items-center group gap-0`}
            >
              <div class="relative">
                {image.hoverStyle === "button"
                  ? (
                    <div class="flex items-center justify-center absolute top-0 left-0 group-hover:(h-full) w-full overflow-hidden h-[0%] z-10 bg-[rgba(85,85,85,0.92)] transition-all duration-[250ms] ease-out">
                      <p class="inline-block px-[29px] py-[16px] border-white text-white text-[11px] font-normal md:(border-1 text-[12px] font-bold)">
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
              open={isOpen.value}
              onClose={() => {
                isOpen.value = false;
              }}
              backgroundColor={content.backgroundColor}
            >
              <PortfolioModal image={image} content={content} />
            </Modal>
          </>
        )
        : null}
    </li>
  );
}
