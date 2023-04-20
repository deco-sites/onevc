import { Item } from "deco-sites/onevc/components/investment-thesis/InvestmentThesis.tsx";

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
            {itemNum <= 9 ? (`${itemNum}`).padStart(0) : itemNum}.
          </span>
          <h3>{item.label}</h3>
        </header>

        <div>{item.description}</div>
      </article>
    </li>
  );
}
