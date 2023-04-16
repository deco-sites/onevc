import type { Props as HeroPictureProps } from "deco-sites/onevc/components/hero/HeroPicture.tsx";
import HeroPicture from "deco-sites/onevc/components/hero/HeroPicture.tsx";
import HeroScroll from "deco-sites/onevc/components/hero/HeroScroll.tsx";
import type { Props as HeroTextsProps } from "deco-sites/onevc/components/hero/HeroTexts.tsx";
import HeroTexts from "deco-sites/onevc/components/hero/HeroTexts.tsx";
import { method, multi } from "deco-sites/onevc/sdk/multi.ts";
import { JSX } from "preact";

interface UtilsHeroTextsProps extends HeroTextsProps {
  type: "texts";
}
interface UtilsHeroPictureProps extends HeroPictureProps {
  type: "picture";
}

interface UtilsHeroScrollTextProps {
  type: "scroll-text";
}

type Props =
  | UtilsHeroTextsProps
  | UtilsHeroPictureProps
  | UtilsHeroScrollTextProps;

function HeroUtils({ type, ...props }: Props) {
  const component = multi<string, string, JSX.Element | null>(
    (type) => type,
    method("texts", () => <HeroTexts {...props as UtilsHeroTextsProps} />),
    method(
      "picture",
      () => <HeroPicture {...props as UtilsHeroPictureProps} />,
    ),
    method("scroll-text", () => <HeroScroll />),
  )(() => null);

  return component(type) as JSX.Element;
}

export default HeroUtils;
