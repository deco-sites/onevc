import Container from "deco-sites/onevc/components/ui/Container.tsx";
import Icon from "deco-sites/onevc/components/ui/Icon.tsx";
import SocialLinks from "deco-sites/onevc/components/ui/SocialLinks.tsx";
import Newsletter from "./Newsletter.tsx";

export type Link = {
  label: string;
  href: string;
};

export interface Props {
  links?: Link[];
}

function Footer({ links = [] }: Props) {
  return (
    <>
      <div className="mt-[65px] mb-[65px] md:mb-[100px]">
        <Newsletter />
      </div>
      <footer>
        <Container class="flex justify-center items-center flex-col md:(flex-row justify-between)">
          <div class="flex justify-start items-center gap-[15px] order-2 pb-[45px] md:(order-1 pb-0)">
            <p class="text-[13px]">© 2023 ONEVC</p>
            <Icon id="Deco" height={17} width={40} strokeWidth={1} />
          </div>
          <div class="order-1 md:order-0">
            <SocialLinks direction="row" links={links} type="normal" />
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
