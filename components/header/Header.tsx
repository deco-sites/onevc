import Navbar from "deco-sites/onevc/islands/Navbar.tsx";
import { Link } from "deco-sites/onevc/components/ui/SocialLinks.tsx";
import Progress from "deco-sites/onevc/islands/Progress.tsx";

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
  /**
   * @title Social links
   */
  links?: Link[];
}

function Header(
  {
    navItems = [],
    links,
  }: Props,
) {
  return (
    <>
      <Navbar menu={{ items: navItems }} links={links} />
      <div class="lg:hidden md:(h-[77px] block) hidden" />
      <Progress />
    </>
  );
}

export default Header;
