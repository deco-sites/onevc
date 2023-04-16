import { useUI } from "deco-sites/onevc/sdk/useUI.ts";

function HeroScroll() {
  const { isScrolled } = useUI();
  return (
    <p
      class={`${
        isScrolled.value ? "opacity-0" : "opacity-100"
      } transition-all duration-[250ms] ease-out absolute font-bold uppercase left-[5px] bottom-[70px] text-[11px] py-[2px] px-[4px] border-b-1 border-black origin-top-left -rotate-90 lg:(bottom-0 right-0 left-auto origin-top-right rotate-90 text-[12px] leading-[15px])`}
    >
      Scroll to explore
    </p>
  );
}

export default HeroScroll;
