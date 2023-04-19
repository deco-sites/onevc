import { useLayoutEffect } from "preact/compat";
import { useSignal } from "@preact/signals";
import { getPercentage } from "deco-sites/onevc/sdk/format.tsx";
import { useUI } from "deco-sites/onevc/sdk/useUI.ts";

function Progress() {
  const sections = [
    "portfolio",
    "team",
    //   "investiment-thesis",
    "contact",
  ];
  const perPage = getPercentage(sections.length + 1);
  const progressData = useSignal({ percentage: perPage, page: 1 });
  const { isScrolled } = useUI();

  useLayoutEffect(() => {
    const scrollEvent = () => {
      const [nextPage, page] = sections.reduce(
        ([initialPerPage, page], current, index, array) => {
          const el = document.getElementById(current);

          if (
            el && el.offsetTop <= window.scrollY + window.innerHeight - 300
          ) {
            return [initialPerPage + perPage, index + 2];
          }
          return [initialPerPage, page];
        },
        [perPage, 1],
      );

      progressData.value = { percentage: nextPage, page };
    };

    if (window.innerWidth >= 768) {
      globalThis.addEventListener("scroll", scrollEvent);
      globalThis.addEventListener("load", scrollEvent);
    }

    return () => {
      globalThis.removeEventListener("scroll", scrollEvent);
      globalThis.removeEventListener("load", scrollEvent);
    };
  }, []);

  return (
    <nav
      aria-hidden="true"
      class={`${isScrolled.value ? "opacity-100" : "opacity-0"}
        md:(flex flex-col justify-center items-center fixed w-[22px] top-[50%] -right-[4px] -translate-[50%] z-9 text-[11px] font-bold leading-[14px] text-black transition-opacity duration-[250ms]) hidden`}
    >
      <span class="py-[10px]">0{progressData.value.page}</span>
      <div class="h-[120px] w-[2px] bg-[rgba(85,85,85,0.25)] relative">
        <div
          class={`h-[${progressData.value.percentage}%] w-full transition-['height'] duration-[250ms] ease-out bg-black block`}
        />
      </div>
      <span class="py-[10px]">0{sections.length + 1}</span>
    </nav>
  );
}

export default Progress;
