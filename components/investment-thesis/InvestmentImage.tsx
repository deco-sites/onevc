import { Item } from "deco-sites/onevc/components/investment-thesis/InvestmentThesis.tsx";

export interface Props {
  index: number;
  item: Item;
}

export function Image({ index, item }: Props) {
  return (
    <img
      src={item.image}
      class=""
      alt="Illustration"
      aria-hidden="true"
    />
  );
}
