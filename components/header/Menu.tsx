import Text from "deco-sites/onevc/components/ui/Text.tsx";
import type { NavItem } from "deco-sites/onevc/components/header/Header.tsx";

export interface Props {
  items: NavItem[];
  onClick: () => void;
}

function Menu({ items, onClick }: Props) {
  const handleClick = (event: MouseEvent) => {
    const href = (event.currentTarget as unknown as HTMLElement).getAttribute(
      "href",
    );

    if (!href?.startsWith("#")) return;

    event.preventDefault();
    const element = document.getElementById(href);

    window.scroll({
      behavior: "smooth",
      left: 0,
      top: element?.offsetTop ?? 0,
    });

    onClick();
  };

  return (
    <ul class="flex flex-col justify-around w-auto lg:(flex-grow-1 max-w-[666px] w-full)">
      {items.map((item) => (
        <li class="lg:(px-[25%] py-0) px-0 py-[10px] overflow-hidden group block">
          <a
            class="relative inline-block whitespace-nowrap text-white text-[20px] p-[5px] font-bold lg:(text-[33px] font-extrabold)"
            href={item.href}
            target={item.newTab ? "_blank" : "_self"}
            onClick={handleClick}
          >
            <span>
              {item.label}
            </span>
            <div class="absolute bg-white w-screen h-[1px] bottom-0 right-[200%] opacity-0 transition-all duration-[250ms] ease-out group-hover:(right-0 opacity-100)" />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
