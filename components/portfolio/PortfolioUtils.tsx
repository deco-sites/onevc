import type { Props as FilterProps } from "deco-sites/onevc/components/portfolio/PortfolioFilter.tsx";
import { Filter } from "deco-sites/onevc/components/portfolio/PortfolioFilter.tsx";
import { Item } from "deco-sites/onevc/components/portfolio/PortfolioItem.tsx";
import type { LabelessItem as ItemProps } from "deco-sites/onevc/components/portfolio/types.ts";
import { method, multi } from "deco-sites/onevc/sdk/multi.ts";
import { JSX } from "preact";

interface UtilItemProps extends ItemProps {
  type: "item";
}
interface UtilFilterProps extends FilterProps {
  type: "filter";
}

type Props =
  | UtilItemProps
  | UtilFilterProps;

function PortfolioUtils({ type, ...props }: Props) {
  const component = multi<string, string, JSX.Element | null>(
    (type) => type,
    method(
      "filter",
      () => <Filter {...props as UtilFilterProps} />,
    ),
    method(
      "item",
      () => <Item {...props as ItemProps} />,
    ),
  )(() => <></>);

  return component(type) as JSX.Element;
}

export default PortfolioUtils;
