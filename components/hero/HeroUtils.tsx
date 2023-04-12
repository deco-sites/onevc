import HeroPicture from "deco-sites/onevc/components/hero/HeroPicture.tsx";
import HeroTexts from "deco-sites/onevc/components/hero/HeroTexts.tsx";

import type { Props as HeroTextsProps } from "deco-sites/onevc/components/hero/HeroTexts.tsx";
import type { Props as HeroPictureProps } from "deco-sites/onevc/components/hero/HeroPicture.tsx";

interface UtilsHeroTextsProps extends HeroTextsProps {
  type: "texts";
}
interface UtilsHeroPictureProps extends HeroPictureProps {
  type: "picture";
}

type Props = UtilsHeroTextsProps | UtilsHeroPictureProps;

function HeroUtils({ type, ...props }: Props) {
  if (type === "texts") {
    return <HeroTexts {...props as UtilsHeroTextsProps} />;
  }
  if (type === "picture") {
    return <HeroPicture {...props as UtilsHeroPictureProps} />;
  }
  return null;
}

export default HeroUtils;
