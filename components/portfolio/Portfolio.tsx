import Container from "deco-sites/onevc/components/ui/Container.tsx";
import { Title } from "deco-sites/onevc/components/ui/Title.tsx";
import Item from "deco-sites/onevc/islands/Item.tsx";
import { slugify } from "deco-sites/onevc/sdk/format.tsx";
import { tw } from "twind/css";
import type {
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
}

function Portfolio({
  items = [],
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
  const getPercentage = (n: number) => Number((100 / n).toFixed(2));

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
    >
      <Title>{title}</Title>
      <Container
        class={`${containerClasses} ${handleSpacing(spacing)}`}
        id={slugify(title)}
      >
        <ul
          class={`flex flex-wrap ${
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
              <li
                class={`${responsivityClasses} ${
                  (firstItemLastRow > index ||
                      firstItemLastRow > index) && itemsJustify === "justify"
                    ? justifyClasses
                    : ""
                }`}
                key={index}
              >
                <Item {...item as LabelessItem} />
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
}

export default Portfolio;
