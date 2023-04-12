import Container from "deco-sites/onevc/components/ui/Container.tsx";
import HeroUtils from "deco-sites/onevc/islands/HeroUtils.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

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
    <Container class="py-[73px] flex flex-col justify-between items-center md:(flex-row items-start) lg:(items-center py-[120px]) h-[100vh] relative">
      <div class="pl-[10%] pt-[10%] font-extrabold text-[25px] leading-[35px] lg:(text-[55px] leading-[67px]) md:(pt-0 text-[45px] leading-[55px] w-[50%])">
        <HeroUtils type="texts" slides={slides} timing={slideTime} />
      </div>
      <HeroUtils type="picture" image={image} imageAlt={imageAlt} />
    </Container>
  );
}

export default Hero;
