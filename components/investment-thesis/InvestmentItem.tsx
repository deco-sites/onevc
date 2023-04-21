import { Item } from "deco-sites/onevc/components/investment-thesis/InvestmentThesis.tsx";
import Button from "deco-sites/onevc/components/ui/Button.tsx";
import { replaceBreakLines } from "deco-sites/onevc/sdk/format.tsx";
import { useUI } from "deco-sites/onevc/sdk/useUI.ts";
import { tw } from "twind/css";

export interface Props {
  index: number;
  item: Item;
}

export function Item({ index, item }: Props) {
  const { displayTab } = useUI();

  const horizontalTitle = tw`md:rotate-0`;
  const verticalTitle = tw`md:rotate-90`;

  const titleClasses = tw`${
    displayTab.value === index ? horizontalTitle : verticalTitle
  } whitespace-nowrap transition-transform duration-[200ms] ease-out origin-bottom-left text-[18px] font-extrabold`;

  const openItem =
    tw`override:(md:(w-[375px] max-h-full) h-full w-full max-h-[500px])`;
  const closeItem =
    tw`override:(md:(w-[112px] max-h-full) h-full w-full max-h-[72px])`;

  const itemClasses = tw`${
    displayTab.value === index ? openItem : closeItem
  } overflow-hidden md:transition-['width'] transition-['max-height'] duration-[400ms] delay-[150ms] py-[25px] px-[15px] border-t-1 last-child:border-b-1 md:(py-[16px] px-[42px] delay-[100ms] border-t-none border-b-none border-l-1 last-child:border-r-1) border-[#cccccc]`;

  const descriptionTransition = tw(() => ({
    "-webkit-transition": "opacity .2s ease-out .65s, width .2s ease-out",
    "transition": `opacity .1s ease-out ${
      displayTab.value !== index ? "0s" : ".5s"
    }, width .2s ease-out`,
  }));

  return (
    <li
      class={itemClasses}
      key={index}
    >
      <Button
        variant="icon"
        onClick={() => displayTab.value = index}
        class={`block rounded-none text-left w-full override:h-auto`}
      >
        <article>
          <header class="flex flex-row flex-wrap gap-[5px] md:(gap-0 block)">
            <p class="text-[18px] font-extrabold md:mb-[50px]">
              {(`${index + 1}`).padStart(2, "0")}.
            </p>
            <h3 class={titleClasses}>{item.label}</h3>
          </header>

          <div
            class={`md:${descriptionTransition} transition-['opacity'] duration-200 delay-[${
              displayTab.value !== index ? "0s" : ".5s"
            }] ease-out ${
              displayTab.value === index
                ? "w-full md:w-[250px] opacity-100 delay-[500ms]"
                : "w-full md:w-[112px] opacity-0"
            } children:(my-[15px])`}
          >
            {replaceBreakLines(item.description)}
          </div>
        </article>
      </Button>
    </li>
  );
}
