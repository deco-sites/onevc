import Button from "deco-sites/onevc/components/ui/Button.tsx";
import { usePortfolioTab } from "deco-sites/onevc/sdk/useUI.ts";
import useIntersectionObserver from "deco-sites/onevc/sdk/useIntersectionObserver.ts";
import { useEffect, useRef } from "preact/compat";
import { tw } from "twind/css";
import { Filter } from "./types.ts";

export interface Props {
  filters: Filter[];
}

export function Filter({ filters }: Props) {
  const portfolioTab = usePortfolioTab();
  const ref = useRef(null);

  const isVisible = useIntersectionObserver(ref, true);

  useEffect(() => {
    if (!isVisible) return;

    portfolioTab.value = 1;
  }, [isVisible]);

  return (
    <ul
      class="flex flex-col md:(flex-row gap-[10px] pl-[calc(10%+10px)])"
      ref={ref}
    >
      {filters.map((item, index) => {
        const selectedClasses = portfolioTab.value === index &&
          tw`font-bold`;

        return (
          <li
            class={`mt-[14px] md:(${
              index > 0 && "border-l-1 border-black pl-[10px]"
            })`}
            data-type="FIL"
          >
            <Button
              variant="icon"
              onClick={() => portfolioTab.value = index}
              class={`block h-auto rounded-none h-full w-full border-none items-center leading-[16px] ${selectedClasses}`}
            >
              {item.label}
            </Button>
          </li>
        );
      })}
    </ul>
  );
}
