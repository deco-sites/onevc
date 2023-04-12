import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { useEffect } from "preact/compat";
import { useSignal } from "@preact/signals";

export interface Props {
  image: string;
  imageAlt: string;
}

function HeroPicture({ image, imageAlt }: Props) {
  const hideImage = useSignal(false);

  useEffect(() => {
    if (!IS_BROWSER) return;

    const scrollEvent = () => {
      if (globalThis.scrollY === 0) {
        return hideImage.value = false;
      }
      return hideImage.value = true;
    };

    globalThis.addEventListener("scroll", scrollEvent);
    globalThis.addEventListener("load", scrollEvent);

    return () => {
      globalThis.removeEventListener("scroll", scrollEvent);
      globalThis.removeEventListener("load", scrollEvent);
    };
  }, [IS_BROWSER]);

  return (
    <div
      class={`${
        hideImage.value
          ? "translate-y-[-50%] md:(translate-x-[30px]) scale-[0.6] opacity-0"
          : ""
      } w-full max-w-[60vw] block relative left-auto top-auto transition ease-in-out duration-[.6s] pb-[50px] md:(fixed translate-y-[-50%] max-w-[501px] left-[50%] top-[50%] pb-[100px])`}
    >
      <div class="animate-hero-image">
        <Picture
          preload
        >
          <Source
            fetchPriority="high"
            src={image}
            width={250.5}
          />
          <img
            class="object-cover w-full sm:h-full"
            src={image}
            alt={imageAlt}
          />
        </Picture>
      </div>
      <div
        class="animate-hero-image-shadow absolute bottom-0 left-[50%] opacity-[.05] w-[70%] h-[10px] bg-black rounded-[50%] translate-x-[-50%] scale-x-[0.8]"
        style={{ filter: "blur(5px)" }}
      />
    </div>
  );
}

export default HeroPicture;
