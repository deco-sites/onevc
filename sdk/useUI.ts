/**
 * This file takes care of global app side effects,
 * like clicking on add to cart and the cart modal being displayed
 */

import { signal } from "@preact/signals";

const displayMenu = signal(false);
const isScrolled = signal(false);
const displayTab = signal<null | number>(null);

const scrollEvent = () => {
  if (globalThis.scrollY === 0) {
    return isScrolled.value = false;
  }
  return isScrolled.value = true;
};

globalThis.addEventListener("scroll", scrollEvent);
globalThis.addEventListener("load", scrollEvent);

const state = {
  isScrolled,
  displayMenu,
  displayTab,
};

export const useUI = () => state;
