import { Item } from "deco-sites/onevc/components/investment-thesis/InvestmentThesis.tsx";
import { replaceBreakLines } from "deco-sites/onevc/sdk/format.tsx";

export interface Props {
  index: number;
  item: Item;
}

export function Item({ index, item }: Props) {
  const itemNum = index + 1;
  return (
    <li
      class=""
      key={index}
    >
      <article>
        <header>
          <span>
            {(`${itemNum}`).padStart(2, "0")}.
          </span>
          <h3>{item.label}</h3>
        </header>

        <div>{replaceBreakLines(item.description)}</div>
      </article>
    </li>
  );
}
