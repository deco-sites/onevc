import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Link {
  label: string;
  href: string;
}

export interface Detail {
  label: string;
  /**
   * @title Detail content
   * @description To add a new line into the text use \n
   */
  value: string;
}

export interface ItemImage {
  src: LiveImage;
  alt: string;
  imageColor: "normal" | "invert" | "grayscale";
  hoverStyle: "none" | "zoom-in" | "button";
  label?: string;
  subLabel?: string;
}

export interface ItemContent {
  title?: string;
  subtitle?: string;
  links?: Link[];
  details?: Detail[];
  /**
   * @description To add a new line into the text use <br>
   */
  description: string;
}

export interface Item {
  /**
   * @description Image settings
   */
  image: ItemImage;
  /**
   * @description Modal content settings
   */
  content: ItemContent;
}

export interface Section {
  title: string;
  containerSize: "container" | "full";
  space: "none" | "around" | "between";
  /**
   * @description If it's justify the last line will be justified within the rest items. If it's free the last line will have rest items
   */
  itemsJustify: "justify" | "free";
  /**
   * @description If it's progressive tablet and mobile columns are dispensable. If it's specific you MUST set all columns' value
   */
  responsivityType: "progressive" | "specific";
  desktopColumns: number;
  tabletColumns?: number;
  mobileColumns?: number;
}
