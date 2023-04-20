import { Item } from "deco-sites/onevc/components/investment-thesis/InvestmentThesis.tsx";
import { useUI } from "deco-sites/onevc/sdk/useUI.ts";
import { useSignal } from "@preact/signals";
import { useLayoutEffect, useRef } from "preact/compat";

export interface Props {
  index: number;
  item: Item;
}

export function Image({ index, item }: Props) {
  const { displayTab } = useUI();
  const animate = useSignal(false);
  const previousTab = useRef(displayTab.value);

  useLayoutEffect(() => {
    previousTab.current = index;

    if (displayTab.value !== index) {
      animate.value = false;
      return;
    }

    animate.value = true;
  }, [displayTab.value]);

  return (
    <img
      src={item.image}
      class={`${previousTab.current === null && "delay-[500ms]"} ${
        animate.value && "override:(left-0 ease-out duration-[600ms])"
      } left-[-200%] absolute transition-['left'] duration-[400ms] ease-in`}
      alt="Illustration"
      aria-hidden="true"
    />
  );
}
