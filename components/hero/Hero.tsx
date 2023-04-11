import Container from "deco-sites/onevc/components/ui/Container.tsx";
import SlideTexts from "deco-sites/onevc/islands/SlideTexts.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";
import { tw } from "twind/css";
import { heroImage, heroImageShadow } from "../ui/animations.ts";

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
  const pictureClasses =
    "w-[50%] max-w-[500px] block fixed left-[50%] top-[50%] pb-[100px] translate-y-[-50%]";
  const shadowClasses =
    "absolute bottom-0 left-0 opacity-[.05] w-[70%] h-[10px] bg-black rounded-[50%]";

  return (
    <Container class="md:(flex items-start py-[73px]) lg:(items-center py-[120px]) h-[100vh] relative">
      <p class="w-[50%] pl-[10%] font-extrabold lg:(text-[55px] leading-[67px]) md:(text-[45px] leading-[55px])">
        <SlideTexts slides={slides} timing={slideTime} />
      </p>
      <div class={pictureClasses}>
        <Picture
          class={tw`${heroImage}`}
          preload
        >
          <Source
            fetchPriority="high"
            src={image}
            width={250}
          />
          <img
            class="object-cover w-full sm:h-full"
            src={image}
            alt={imageAlt}
          />
          <div
            class={tw`${heroImageShadow} ${shadowClasses}`}
            style={{ filter: "blur(5px)" }}
          />
        </Picture>
      </div>
    </Container>
  );
}

export default Hero;
