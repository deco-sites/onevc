import type { ComponentChildren } from "preact";
import Text from "./Text.tsx";

export interface Props {
  children: ComponentChildren;
}

export function Title({ children }: Props) {
  return (
    <h2 class="text-left w-full">
      <div
        aria-hidden="true"
        class="w-[10%] h-[1px] inline-block align-middle bg-black mr-[10px]"
      />
      <span class="font-extrabold inline-block align-middle text-[18px] leading-[22px]">
        {children}
      </span>
    </h2>
  );
}
