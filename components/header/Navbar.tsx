import type { Props as MenuProps } from "deco-sites/onevc/components/header/Menu.tsx";
import Container from "deco-sites/onevc/components/ui/Container.tsx";
import type { Link } from "deco-sites/onevc/components/ui/SocialLinks.tsx";
import SocialLinks from "deco-sites/onevc/components/ui/SocialLinks.tsx";
import MenuButton from "deco-sites/onevc/components/header/MenuButton.tsx";
import { useUI } from "deco-sites/onevc/sdk/useUI.ts";
import { Picture, Source } from "deco-sites/std/components/Picture.tsx";
import Menu from "./Menu.tsx";

interface Props {
  menu: Pick<MenuProps, "items">;
  links?: Link[];
}

function Navbar({ menu, links }: Props) {
  const { isScrolled, displayMenu } = useUI();
  const logoAsset =
    "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/829/bc44a6c1-7cdf-4996-9298-f3588faf7a1e";

  const checkDisplayMenu = (okClasses: string, failClasses = "") => {
    if (displayMenu.value) {
      return okClasses;
    }
    return failClasses;
  };

  const closeMenu = () => {
    displayMenu.value = false;
  };

  return (
    <header
      class={`fixed w-screen z-50 transition-colors duration-[250ms] ease-out ${
        checkDisplayMenu(
          "override:bg-[rgba(85,85,85,0.99)]",
          isScrolled.value
            ? "bg-[rgba(255,255,255,0.95)]"
            : "md:bg-transparent",
        )
      }`}
    >
      <Container
        class={`transition-all relative duration-[250ms] ease-out py-[15px] flex flex-col justify-between ${
          checkDisplayMenu(
            "h-[100vh]",
            isScrolled.value ? "lg:h-[77px] h-[57px]" : "lg:h-[119px] h-[57px]",
          )
        } ${!isScrolled.value || displayMenu.value ? "lg:py-[36px]" : ""}`}
      >
        <div class="flex flex-row justify-between items-center w-full gap-2">
          <a
            href="/"
            class="flex-grow inline-flex items-center"
            aria-label="Store logo"
          >
            <Picture
              preload
              style={{
                filter: checkDisplayMenu(
                  "invert(100%)",
                  "none",
                ),
              }}
            >
              <Source
                media="(max-width: 767px)"
                fetchPriority="high"
                src={logoAsset}
                width={95}
              />
              <Source
                media="(min-width: 768px)"
                fetchPriority="high"
                src={logoAsset}
                width={165}
              />
              <img
                class="lg:w-[165px] w-[95px] h-auto"
                src={logoAsset}
                alt="ONEVC Logo"
              />
            </Picture>
          </a>
          <MenuButton />
        </div>
        <div
          class={`transition-all duration-100 ease-out flex flex-col items-start lg:(flex-grow-1 pt-[36px] pb-[120px] items-center) ${
            checkDisplayMenu(
              "opacity-1 visible",
              "opacity-0 invisible",
            )
          }`}
        >
          <Menu {...menu} onClick={closeMenu} />
        </div>
        <div
          class={`transition-all duration-100 ease-out lg:(flex absolute bottom-[55px] left-0 -rotate-90 origin-top-left) ${
            checkDisplayMenu(
              "opacity-1 visible",
              "opacity-0 invisible",
            )
          }`}
        >
          {links && links.length > 0
            ? <SocialLinks links={links} type="invert" />
            : null}
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
