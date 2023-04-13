import Container from "deco-sites/onevc/components/ui/Container.tsx";
import Navbar from "deco-sites/onevc/islands/Navbar.tsx";
import type { Image } from "deco-sites/std/components/types.ts";

export interface NavItem {
  label: string;
  href: string;
  children?: Array<{
    label: string;
    href: string;
    children?: Array<{
      label: string;
      href: string;
    }>;
  }>;
  image?: {
    src?: Image;
    alt?: string;
  };
}

export interface Props {
  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: NavItem[];
}

function Header(
  {
    navItems = [],
  }: Props,
) {
  return (
    <>
      <header class="bg-[rgba(255,255,255,0.95)] md:bg-transparent fixed w-screen z-50">
        <Navbar menu={{ items: navItems }} />
      </header>
      <div class="lg:hidden md:(h-[77px] block) hidden" />
    </>
  );
}

export default Header;
