import type { Props as ItemProps } from "deco-sites/onevc/components/investment-thesis/InvestmentItem.tsx";
import type { Props as ContentProps } from "deco-sites/onevc/components/investment-thesis/InvestmentContent.tsx";
import { Content } from "deco-sites/onevc/components/investment-thesis/InvestmentContent.tsx";
import { Image } from "deco-sites/onevc/components/investment-thesis/InvestmentImage.tsx";
import { Item } from "deco-sites/onevc/components/investment-thesis/InvestmentItem.tsx";
import { method, multi } from "deco-sites/onevc/sdk/multi.ts";
import { JSX } from "preact";

interface UtilItemProps extends ItemProps {
  type: "item" | "image";
}
interface UtilContentProps extends ContentProps {
  type: "content";
}

type Props =
  | UtilItemProps
  | UtilContentProps;

function InvestmentUtils({ type, ...props }: Props) {
  const component = multi<string, string, JSX.Element | null>(
    (type) => type,
    method(
      "image",
      () => <Image {...props as ItemProps} />,
    ),
    method(
      "item",
      () => <Item {...props as ItemProps} />,
    ),
    method("content", () => <Content {...props as ContentProps} />),
  )(() => null);

  return component(type) as JSX.Element;
}

export default InvestmentUtils;
