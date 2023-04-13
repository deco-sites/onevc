import { useUI } from "deco-sites/onevc/sdk/useUI.ts";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";

export interface Props {
  image: string;
  imageAlt: string;
}

function HeroPicture({ image, imageAlt }: Props) {
  const { isScrolled } = useUI();

  return (
    <div
      class={`${
        isScrolled.value
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
