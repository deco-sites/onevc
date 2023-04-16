import Container from "deco-sites/onevc/components/ui/Container.tsx";
import Text from "deco-sites/onevc/components/ui/Text.tsx";
import { slugify } from "deco-sites/onevc/sdk/format.ts";
import Item from "deco-sites/onevc/islands/Item.tsx";
import type { Item as ItemProps, LabelessItem, Section } from "./types.ts";
import { tw } from "twind/css";

export interface Props {
  section: Section;
  items: ItemProps[];
}

function Portfolio({
  items = [],
  section: {
    title,
    containerSize,
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

  return (
    <div class={`${background === "gray-line" ? "bg-gradient-custom" : ""}`}>
      <Container
        class={`${containerClasses} pt-[120px]`}
        id={slugify(title)}
      >
        <h2 class="text-center">
          <Text variant="heading-2">
            {title}
          </Text>
        </h2>

        <ul
          class={`flex flex-wrap ${
            containerSize === "container" ? "px-[10%]" : ""
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
