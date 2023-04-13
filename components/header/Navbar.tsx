import { asset } from "$fresh/runtime.ts";
import type { Props as MenuProps } from "deco-sites/onevc/components/header/Menu.tsx";
import Container from "deco-sites/onevc/components/ui/Container.tsx";
import MenuButton from "deco-sites/onevc/islands/MenuButton.tsx";
import { useUI } from "deco-sites/onevc/sdk/useUI.ts";
import { Picture } from "deco-sites/std/components/Picture.tsx";
import Menu from "./Menu.tsx";

interface Props {
  menu: MenuProps;
}

function Navbar({ menu }: Props) {
  const { isScrolled, displayMenu } = useUI();

  const checkDisplayMenu = (okClasses: string, failClasses = "") => {
    if (displayMenu.value) {
      return okClasses;
    }
    return failClasses;
  };

  return (
    <Container
      class={`transition-all duration-[250ms] ease-out h-[100vh] py-[15px] ${
        checkDisplayMenu(
          "h-[100vh] bg-[rgba(85,85,85,0.99)]",
          isScrolled.value ? "h-[77px]" : "lg:h-[119px] h-[77px]",
        )
      } ${!isScrolled.value || displayMenu.value ? "lg:py-[36px]" : ""}`}
    >
      <div
        class={`flex flex-row justify-between items-center w-full gap-2`}
      >
        <a
          href="/"
          class={`flex-grow inline-flex items-center`}
          aria-label="Store logo"
        >
          <Picture
            preload
          >
            {
              /* <Source
            fetchPriority="high"
            src={asset("/logo.png")}
            width={165}
          /> */
            }
            <img
              class="object-cover w-full sm:h-full"
              src={asset("/logo.png")}
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
        <Menu {...menu} />
      </div>
    </Container>
  );
}

export default Navbar;
