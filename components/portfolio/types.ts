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

export type ImageColor = "normal" | "invert" | "grayscale";

export interface ItemImage {
  src: LiveImage;
  alt: string;
  imageColor: ImageColor;
  hoverStyle: "none" | "zoom-in" | "button";
  /**
   * @description Used in cases where the hover style is button
   */
  buttonLabel?: string;
  label?: string;
  subLabel?: string;
}

export interface ItemContent {
  title?: string;
  subtitle?: string;
  imageColor: ImageColor;
  links?: Link[];
  details?: Detail[];
  /**
   * @description To add a new line into the text use <br>
   */
  description: string;
}

export interface Item {
  /**
   * @description Setup item's identifier
   */
  label: string;
  /**
   * @description Image settings
   */
  image: ItemImage;
  /**
   * @description Modal content settings
   */
  content: ItemContent;
}

export type LabelessItem = Omit<Item, "label">;

export interface Section {
  title: string;
  containerSize: "container" | "full";
  background: "white" | "gray-line";
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
