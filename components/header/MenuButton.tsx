import Button from "deco-sites/onevc/components/ui/Button.tsx";
import { useUI } from "deco-sites/onevc/sdk/useUI.ts";

function MenuButton() {
  const { displayMenu } = useUI();
  const baseLines =
    "absolute bg-black h-[2px] w-full right-0 transition-all duration-[250ms] ease-out will-change-auto";

  const checkDisplayMenu = (okClasses: string, failClasses = "") => {
    if (displayMenu.value) {
      return okClasses;
    }
    return failClasses;
  };

  return (
    <Button
      variant="icon"
      aria-label={displayMenu.value ? "close menu" : "open menu"}
      onClick={() => {
        displayMenu.value = !displayMenu.value;
      }}
      class={`lg:w-[48px] w-[35px] block relative transition-['height'] duration-[250ms] ease-out ${
        checkDisplayMenu("h-[38px]", "h-[18px]")
      }`}
    >
      <div
        class={`${baseLines} top-[-2px] ${
          checkDisplayMenu("bg-white opacity-0", "opacity-1")
        }`}
      />
      <div
        class={`${baseLines} ${
          checkDisplayMenu("bg-white top-[50%] -rotate-45", "top-[6px]")
        }`}
      />
      <div
        class={`${baseLines} bottom-0 ${
          checkDisplayMenu("bg-white top-[50%] rotate-45", "w-[70%]")
        }`}
      />
    </Button>
  );
}

export default MenuButton;
