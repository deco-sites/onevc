import type { Item } from "deco-sites/onevc/components/investment-thesis/InvestmentThesis.tsx";
import InvestmentUtils from "deco-sites/onevc/islands/InvestmentUtils.tsx";

export interface Props {
  text: string;
  items: Item[];
}

export function Content({ text, items }: Props) {
  return (
    <>
      <p class="c-investment__text">
        {text}
      </p>
      <ul class="c-investment-list">
        {items.map((item, index) => (
          <InvestmentUtils type="item" item={item} index={index} key={index} />
        ))}
      </ul>
    </>
  );
}
