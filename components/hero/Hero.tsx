import Container from "deco-sites/onevc/components/ui/Container.tsx";
import HeroUtils from "deco-sites/onevc/islands/HeroUtils.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import type { Link } from "deco-sites/onevc/components/ui/SocialLinks.tsx";
import SocialLinks from "deco-sites/onevc/components/ui/SocialLinks.tsx";

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
  /**
   * @title Social links
   */
  links?: Link[];
}

function Hero({ slides, slideTime, image, imageAlt, links }: Props) {
  return (
    <Container class="flex flex-col justify-between items-center relative py-[73px] h-[100vh] mb-[30px] md:(flex-row items-start mb-[120px]) lg:(items-center py-[120px]) ">
      <div class="pl-[10%] pt-[10%] font-extrabold text-[25px] leading-[35px] lg:(text-[55px] leading-[67px]) md:(pt-0 text-[45px] leading-[55px] w-[50%])">
        <HeroUtils type="texts" slides={slides} timing={slideTime} />
      </div>
      <HeroUtils type="picture" image={image} imageAlt={imageAlt} />
      {links && links.length > 0
        ? (
          <div class="hidden lg:(flex absolute bottom-[-79px] left-0 origin-top-left -rotate-90)">
            <SocialLinks links={links} type="normal" />
          </div>
        )
        : null}
      <HeroUtils type="scroll-text" />
    </Container>
  );
}

export default Hero;
