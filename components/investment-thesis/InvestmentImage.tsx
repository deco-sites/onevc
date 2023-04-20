import { Item } from "deco-sites/onevc/components/investment-thesis/InvestmentThesis.tsx";
import { useUI } from "deco-sites/onevc/sdk/useUI.ts";

export interface Props {
  index: number;
  item: Item;
}

export function Image({ index, item }: Props) {
  const { displayTab } = useUI();

  if (displayTab.value !== index) {
    return <></>;
  }

  return (
    <img
      src={item.image}
      class=""
      alt="Illustration"
      aria-hidden="true"
    />
  );
}
