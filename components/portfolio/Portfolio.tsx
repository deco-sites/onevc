import Container from "deco-sites/onevc/components/ui/Container.tsx";
import { Title } from "deco-sites/onevc/components/ui/Title.tsx";
import PortfolioUtils from "deco-sites/onevc/islands/PortfolioUtils.tsx";
import { getPercentage, slugify } from "deco-sites/onevc/sdk/format.tsx";
import { tw } from "twind/css";
import type {
  Filter,
  Item as ItemProps,
  LabelessItem,
  Section,
  Spacing,
} from "./types.ts";
import { multi } from "deco-sites/onevc/sdk/multi.ts";
import { method } from "deco-sites/onevc/sdk/multi.ts";

export interface Props {
  section: Section;
  items: ItemProps[];
  filters?: Filter[];
}

function Portfolio({
  items = [],
  filters,
  section: {
    title,
    containerSize,
    spacing,
    background,
    itemsJustify,
    responsivityType,
    desktopColumns,
    tabletColumns = 0,
    mobileColumns = 0,
  },
}: Props) {
  const containerClasses = tw`${
    containerSize === "full" ? "override:(w-full max-w-full)" : ""
  }`;

  const responsivityClasses = responsivityType === "specific"
    ? tw`lg:w-[${getPercentage(desktopColumns)}%] sm:w-[${
      getPercentage(tabletColumns)
    }%] w-[${getPercentage(mobileColumns)}%]`
    : tw`lg:w-[${getPercentage(desktopColumns)}%] sm:w-[${
      getPercentage(desktopColumns - 1)
    }%] w-[${getPercentage(desktopColumns - 2)}%]`;

  const handleSpacing = multi<Spacing, Spacing, string>(
    (s) => s,
    method("high", () => tw`md:py-[90px] py-[15%]`),
    method("medium", () => tw`md:py-[45px] py-[10%]`),
    method("low", () => tw`py-[20px]`),
  )();

  return (
    <div
      class={`${
        background === "gray-line" ? "lg:bg-gradient-custom bg-[#f7f9fb]" : ""
      } pt-[30px]`}
      id={slugify(title)}
    >
      <Title>{title}</Title>
      {filters?.length
        ? <PortfolioUtils type="filter" filters={filters} />
        : null}
      <Container class={`${containerClasses} ${handleSpacing(spacing)}`}>
        <ul
          class={`flex flex-wrap min-h-[217px] ${
            containerSize === "container" ? "px-[10%] gap-y-[20px]" : ""
          }`}
        >
          {items.map((item, index, array) => {
            const firstItemLastRow = desktopColumns *
              (Math.floor(array.length / desktopColumns) - 1);
            const firstItems = array.length - firstItemLastRow;

            const justifyClasses = tw`override:(sm:w-[${
              getPercentage(firstItems)
            }%] w-full)`;

            return (
              <PortfolioUtils
                type="item"
                key={index}
                index={index}
                shouldRespectsFilter={!!filters?.length}
                _class={`${responsivityClasses} ${
                  (firstItemLastRow > index ||
                      firstItemLastRow > index) && itemsJustify === "justify"
                    ? justifyClasses
                    : ""
                }`}
                {...item as LabelessItem}
              />
            );
          })}
        </ul>
      </Container>
    </div>
  );
}

export default Portfolio;
