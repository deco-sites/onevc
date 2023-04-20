import type { Item } from "deco-sites/onevc/components/investment-thesis/InvestmentThesis.tsx";
import InvestmentUtils from "deco-sites/onevc/components/investment-thesis/InvestmentUtils.tsx";
import { replaceBreakLines } from "deco-sites/onevc/sdk/format.tsx";
import { useUI } from "deco-sites/onevc/sdk/useUI.ts";
import { useSignal } from "@preact/signals";
import { useEffect, useRef } from "preact/compat";
import { tw } from "twind/css";
import { IS_BROWSER } from "$fresh/runtime.ts";

export interface Props {
  text: string;
  items: Item[];
}

export function Content({ text, items }: Props) {
  const { displayTab } = useUI();
  const visible = useSignal(false);
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!ref.current || !IS_BROWSER) return;

    const intersectionObserver = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        visible.value = entries[0].isIntersecting;

        if (entries[0].isIntersecting) {
          intersectionObserver.disconnect();
        }
      },
      { root: null, rootMargin: "0px", threshold: 1.0 },
    );

    intersectionObserver.observe(ref.current);
    return () => intersectionObserver.disconnect();
  }, [ref.current]);

  const transition = tw(() => ({
    "-webkit-transition":
      "opacity .5s ease-out, left .5s ease-out, top .5s ease-out",
    "transition": "opacity .5s ease-out, left .5s ease-out, top .5s ease-out",
  }));

  const showElements = (direction: string) =>
    tw`override:(opacity-100 ${direction}-[0px])`;
  const hideElements = (direction: string) =>
    tw`override:(opacity-0 ${direction}-[50px])`;

  const commonClasses = tw`${transition} relative opacity-0`;

  const textClasses = tw`${
    visible.value && displayTab.value === null
      ? showElements("left")
      : hideElements("left")
  } ${commonClasses} text-[30px] font-bold leading-[37px]`;

  const listClasses = tw`${
    visible.value ? showElements("top") : hideElements("top")
  } ${commonClasses} flex flex-row flex-nowrap`;

  return (
    <>
      <div class={textClasses}>
        {replaceBreakLines(text)}
      </div>
      <ul class={listClasses} ref={ref}>
        {items.map((item, index) => (
          <InvestmentUtils type="item" item={item} index={index} key={index} />
        ))}
      </ul>
    </>
  );
}
