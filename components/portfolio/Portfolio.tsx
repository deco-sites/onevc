import Container from "deco-sites/onevc/components/ui/Container.tsx";
import Text from "deco-sites/onevc/components/ui/Text.tsx";
import { slugify } from "deco-sites/onevc/sdk/format.ts";
import Item from "deco-sites/onevc/islands/Item.tsx";
import type { Item as ItemProps, Section } from "./types.ts";

export interface Props {
  section: Section;
  items: ItemProps[];
}

function Portfolio({
  items = [],
  section,
}: Props) {
  console.log(items, section);
  return (
    <Container class="grid grid-cols-1 grid-rows-[48px_1fr] py-10">
      <h2 class="text-center">
        <Text variant="heading-2" id={slugify(section.title)}>
          {section.title}
        </Text>
      </h2>

      {items.map((item, index) => <Item key={index} {...item} width={33} />)}
    </Container>
  );
}

export default Portfolio;
