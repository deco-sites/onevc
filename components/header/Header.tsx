import Navbar from "deco-sites/onevc/islands/Navbar.tsx";

export interface NavItem {
  label: string;
  href: string;
  /**
   * @title Should open a new tab?
   */
  newTab?: boolean;
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
      <Navbar menu={{ items: navItems }} />
      <div class="lg:hidden md:(h-[77px] block) hidden" />
    </>
  );
}

export default Header;
