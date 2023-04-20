import Container from "deco-sites/onevc/components/ui/Container.tsx";
import { Title } from "deco-sites/onevc/components/ui/Title.tsx";
import InvestmentUtils from "deco-sites/onevc/islands/InvestmentUtils.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Item {
  label: string;
  description: string;
  image: LiveImage;
}

export interface Props {
  initialText: string;
  items: Item[];
}

function InvestmentThesis({ initialText, items }: Props) {
  return (
    <div id="investment-thesis" class="relative mt-[40px]">
      <Title>Investment Thesis</Title>
      {items.map((item, index) => (
        <InvestmentUtils type="image" item={item} index={index} key={index} />
      ))}

      <Container class="md:(flex py-[90px]) py-[10%] justify-between">
        <InvestmentUtils type="content" items={items} text={initialText} />
      </Container>
    </div>
  );
}

export default InvestmentThesis;
