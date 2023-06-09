import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Link {
  label: string;
  href: string;
}

export interface Detail {
  label: string;
  /**
   * @title Detail content
   * @description To add a new line into the text use <br>
   */
  value: string;
}

export type ImageColor = "normal" | "invert" | "grayscale";
export type Spacing = "high" | "medium" | "low";
export type HoverStyle = "none" | "zoom-in" | "button";

export interface ItemImage {
  src: LiveImage;
  alt: string;
  imageColor: ImageColor;
  hoverStyle: HoverStyle;
  /**
   * @description Used in cases where the hover style is button.
   */
  buttonLabel?: string;
  label?: string;
  subLabel?: string;
}

export interface ItemContent {
  title?: string;
  subtitle?: string;
  imageColor: ImageColor;
  /**
   * @description This can be hex, rgb, rgba or color name. Help to get correct color: https://imagecolorpicker.com/
   */
  backgroundColor?: string;
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
   * @title Image item
   */
  image: ItemImage;
  /**
   * @title Modal content
   */
  content: ItemContent;
  /**
   * @description This value will link with the filters setup
   */
  filterKey?: number;
}

export type LabelessItem = Omit<Item, "label">;

export interface Section {
  title: string;
  containerSize: "container" | "full";
  /**
   * @description Handle internal spacing between elements
   */
  spacing: Spacing;
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

export interface Filter {
  label: string;
  /**
   * @title Filter identifier
   * @description This field shoud be unique and will match with items if there is almost one. Starts in 1
   */
  key: number;
}
