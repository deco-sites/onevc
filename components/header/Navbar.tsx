import { asset } from "$fresh/runtime.ts";
import type { Props as MenuProps } from "deco-sites/onevc/components/header/Menu.tsx";
import Container from "deco-sites/onevc/components/ui/Container.tsx";
import MenuButton from "deco-sites/onevc/islands/MenuButton.tsx";
import { useUI } from "deco-sites/onevc/sdk/useUI.ts";
import { Picture } from "deco-sites/std/components/Picture.tsx";
import Menu from "./Menu.tsx";

interface Props {
  menu: Pick<MenuProps, "items">;
}

function Navbar({ menu }: Props) {
  const { isScrolled, displayMenu } = useUI();
  const logoAsset = asset("/logo.png");

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
          "bg-[rgba(85,85,85,0.99)]!",
          "bg-[rgba(255,255,255,0.95)] md:bg-transparent",
        )
      }`}
    >
      <Container
        class={`transition-all duration-[250ms] ease-out py-[15px] ${
          checkDisplayMenu(
            "h-[100vh]",
            isScrolled.value ? "h-[77px]" : "lg:h-[119px] h-[77px]",
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
              {
                /* <Source
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
            /> */
              }
              <img
                class="object-cover w-full sm:h-full"
                src={logoAsset}
                alt="ONEVC Logo"
              />
            </Picture>
          </a>
          <MenuButton />
        </div>
        <div
          class={`transition-all duration-100 ease-out ${
            checkDisplayMenu(
              "opacity-1 visible h-auto",
              "opacity-0 invisible h-0",
            )
          }`}
        >
          <Menu {...menu} onClick={closeMenu} />
        </div>
      </Container>
    </header>
  );
}

export default Navbar;
