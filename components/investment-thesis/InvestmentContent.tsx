import type { Item } from "deco-sites/onevc/components/investment-thesis/InvestmentThesis.tsx";
import InvestmentUtils from "deco-sites/onevc/components/investment-thesis/InvestmentUtils.tsx";
import { replaceBreakLines } from "deco-sites/onevc/sdk/format.tsx";
import { useInvestmentTab } from "deco-sites/onevc/sdk/useUI.ts";
import { useSignal } from "@preact/signals";
import { useEffect, useRef } from "preact/compat";
import { tw } from "twind/css";
import { IS_BROWSER } from "$fresh/runtime.ts";

export interface Props {
  text: string;
  items: Item[];
}

export function Content({ text, items }: Props) {
  const investmentTab = useInvestmentTab();
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
      { root: null, rootMargin: "0px", threshold: 1 },
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

  const commonClasses = tw`${transition} relative`;

  const textClasses = tw`${
    visible.value ? showElements("left") : hideElements("left")
  } ${
    investmentTab.value !== null && `md:${hideElements("left")}`
  } ${commonClasses} font-bold text-[19px] leading-[23px] mb-[40px] md:(text-[30px] leading-[37px] mb-0)`;

  const listClasses = tw`${
    visible.value ? showElements("top") : hideElements("top")
  } ${commonClasses} md:flex flex-row flex-nowrap justiry-start`;

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
