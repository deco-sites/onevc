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

  const horizontalTitle = tw`rotate-0`;
  const verticalTitle = tw`rotate-90`;

  const titleClasses = tw`${
    displayTab.value === index ? horizontalTitle : verticalTitle
  } text-[18px] whitespace-nowrap font-extrabold transition-transform duration-[200ms] ease-out origin-bottom-left`;

  return (
    <li
      class="overflow-hidden"
      key={index}
    >
      <article>
        <header>
          <Button
            variant="icon"
            onClick={() => displayTab.value = index}
            class={`flex rounded-none`}
          >
            <span>
              {(`${index + 1}`).padStart(2, "0")}.
            </span>
            <h3 class={titleClasses}>{item.label}</h3>
          </Button>
        </header>

        <div>{replaceBreakLines(item.description)}</div>
      </article>
    </li>
  );
}
