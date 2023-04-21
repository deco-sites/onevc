import { Item } from "deco-sites/onevc/components/investment-thesis/InvestmentThesis.tsx";
import { useUI } from "deco-sites/onevc/sdk/useUI.ts";
import { useSignal } from "@preact/signals";
import { useLayoutEffect, useRef } from "preact/compat";

export interface Props {
  index: number;
  item: Item;
}

export function Image({ index, item }: Props) {
  const { investmentTab } = useUI();
  const animate = useSignal(false);
  const previousTab = useRef(investmentTab.value);

  useLayoutEffect(() => {
    previousTab.current = index;

    if (investmentTab.value !== index) {
      animate.value = false;
      return;
    }

    animate.value = true;
  }, [investmentTab.value]);

  return (
    <img
      src={item.image}
      class={`${previousTab.current === null && "delay-[500ms]"} ${
        animate.value &&
        "override:(md:left-0 -left-[20%] ease-out duration-[600ms])"
      } left-[-200%] top-[50%] -translate-y-[50%] -z-1 absolute transition-['left'] duration-[400ms] ease-in md:opacity-100 opacity-25`}
      alt="Illustration"
      aria-hidden="true"
    />
  );
}
