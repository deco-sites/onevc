import Container from "deco-sites/onevc/components/ui/Container.tsx";
import { Title } from "deco-sites/onevc/components/ui/Title.tsx";
import { replaceBreakLines } from "deco-sites/onevc/sdk/format.tsx";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Contact {
  image: LiveImage;
  imageAlt: string;
  label: string;
  /**
   * @description To add a new line into the text use <br>
   */
  address: string;
}

export interface Props {
  contacts: Contact[];
}

function Contact({ contacts }: Props) {
  return (
    <section class="mt-[45px]" id="contact">
      <Title>Contact</Title>
      <Container>
        <ul class="flex flex-wrap justify-center py-[35px] mt-[15px] md:(mt-[50px] justify-around)">
          {contacts.map(({
            image,
            imageAlt,
            label,
            address,
          }) => (
            <li class="flex flex-col items-center pb-[40px] w-full md:w-[50%]">
              <Picture>
                <Source
                  media="(max-width: 767px)"
                  fetchPriority="high"
                  src={image}
                  width={240}
                />
                <Source
                  media="(min-width: 768px)"
                  fetchPriority="high"
                  src={image}
                  width={358}
                />
                <img
                  class="h-auto"
                  src={image}
                  alt={imageAlt}
                />
              </Picture>
              <h3 class="my-[18px] font-bold text-[18px] leading-[28px]">
                {label}
              </h3>
              <div class="text-center text-[15px] leading-[20px] font-medium">
                {replaceBreakLines(address)}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export default Contact;
