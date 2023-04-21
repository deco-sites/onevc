import Button from "deco-sites/onevc/components/ui/Button.tsx";
import { useUI } from "deco-sites/onevc/sdk/useUI.ts";
import { tw } from "twind/css";
import { Filter } from "./types.ts";

export interface Props {
  filters: Filter[];
}

export function Filter({ filters }: Props) {
  const { portfolioTab } = useUI();

  return (
    <ul class="flex flex-col md:(flex-row gap-[10px] pl-[calc(10%+10px)])">
      {filters.map((item, index) => {
        const selectedClasses = portfolioTab.value === index &&
          tw`font-bold`;

        return (
          <li class={`mt-[14px] md:(${index > 0 && 'border-l-1 border-black pl-[10px]'})`} data-type="FIL">
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
