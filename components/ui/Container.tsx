import type { JSX } from "preact";

type Props = JSX.IntrinsicElements["div"];

function Container({ class: _class = "", ...props }: Props) {
  return <div class={`w-full px-[28px] ${_class}`} {...props} />;
}

export default Container;
