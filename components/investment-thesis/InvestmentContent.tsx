import { IS_BROWSER } from "$fresh/runtime.ts";
import type { Item } from "deco-sites/onevc/components/investment-thesis/InvestmentThesis.tsx";
import InvestmentUtils from "deco-sites/onevc/components/investment-thesis/InvestmentUtils.tsx";
import { replaceBreakLines } from "deco-sites/onevc/sdk/format.tsx";
import useIntersectionObserver from "deco-sites/onevc/sdk/useIntersectionObserver.ts";
import { useInvestmentTab } from "deco-sites/onevc/sdk/useUI.ts";
import { useEffect, useRef } from "preact/compat";
import { tw } from "twind/css";

export interface Props {
  text: string;
  items: Item[];
}

export function Content({ text, items }: Props) {
  const investmentTab = useInvestmentTab();
  const ref = useRef<HTMLUListElement>(null);
  const visible = useIntersectionObserver(ref, true);

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
    visible ? showElements("left") : hideElements("left")
  } ${
    investmentTab.value !== null && `md:${hideElements("left")}`
  } ${commonClasses} font-bold text-[19px] leading-[23px] mb-[40px] md:(text-[30px] leading-[37px] mb-0)`;

  const listClasses = tw`${
    visible ? showElements("top") : hideElements("top")
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
