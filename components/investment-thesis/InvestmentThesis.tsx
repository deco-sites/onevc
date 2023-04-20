import Container from "deco-sites/onevc/components/ui/Container.tsx";
import { Title } from "deco-sites/onevc/components/ui/Title.tsx";
import InvestmentUtils from "deco-sites/onevc/islands/InvestmentUtils.tsx";

export interface Item {
  label: string;
  description: string;
  image: string;
}

export interface Props {
  initialText: string;
  items: Item[];
}

function InvestmentThesis({ initialText, items }: Props) {
  return (
    <div id="investment-thesis">
      <Title>Investment Thesis</Title>
      {items.map((item, index) => (
        <InvestmentUtils type="image" item={item} index={index} key={index} />
      ))}

      <Container class="o-content-block">
        <InvestmentUtils type="content" items={items} text={initialText} />
      </Container>
    </div>
  );
}

export default InvestmentThesis;
