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
    <ul class="px-4 flex-grow flex flex-col divide-y divide-default">
      {items.map((item) => (
        <li>
          <a
            class="w-full inline-block"
            href={item.href}
            target={item.newTab ? "_blank" : "_self"}
            onClick={handleClick}
          >
            <Text
              class="flex-grow min-h-[40px] flex items-center justify-start"
              variant={"menu"}
            >
              {item.label}
            </Text>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
