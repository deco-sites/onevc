import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import SlideTexts from "deco-sites/onevc/islands/SlideTexts.tsx";

export interface Props {
  /**
   * @description Each text will be displayed in a new line
   */
  slides: string[][];
  slideTime: number;
  image: LiveImage;
  imageAlt: string;
}

function Hero({ slides, slideTime, image, imageAlt }: Props) {
  return (
    <div class="md:(flex items-start) lg:items-center">
      <p class="w-[50%] lg:(text-[55px] leading-[67px]) md:(text-[45px] leading-[55px])">
        <SlideTexts slides={slides} timing={slideTime} />
      </p>
      <div class="w-[50%]">
        <Picture class="w-[50%]" preload>
          <Source
            media="(max-width: 767px)"
            fetchPriority="high"
            src={image}
            width={500}
          />
          <Source
            media="(min-width: 768px)"
            fetchPriority="high"
            src={image}
            width={1440}
          />
          <img
            class="object-cover w-full sm:h-full"
            loading="eager"
            src={image}
            alt={imageAlt}
          />
        </Picture>
      </div>
    </div>
  );
}

export default Hero;
