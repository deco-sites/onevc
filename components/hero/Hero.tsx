import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import SlideTexts from "deco-sites/onevc/islands/SlideTexts.tsx";
import Container from "deco-sites/onevc/components/ui/Container.tsx";

export interface Props {
  /**
   * @description Each slide have new texts to be placed in each line
   */
  slides: string[][];
  /**
   * @description In seconds
   */
  slideTime: number;
  /**
   * @description Main hero image
   */
  image: LiveImage;
  /**
   * @description Alt text from main hero image
   */
  imageAlt: string;
}

function Hero({ slides, slideTime, image, imageAlt }: Props) {
  return (
    <Container class="md:(flex items-start) lg:items-center h-[100vh]">
      <p class="w-[50%] pl-[10%] font-extrabold lg:(text-[55px] leading-[67px]) md:(text-[45px] leading-[55px])">
        <SlideTexts slides={slides} timing={slideTime} />
      </p>
      <Picture
        class="w-[50%] max-w-[500px] block fixed left-[50%] top-[50%]"
        preload
      >
        <Source
          fetchPriority="high"
          src={image}
          width={500}
        />
        <img
          class="object-cover w-full sm:h-full"
          loading="eager"
          src={image}
          alt={imageAlt}
        />
      </Picture>
    </Container>
  );
}

export default Hero;
