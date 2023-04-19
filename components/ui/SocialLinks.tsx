export interface Link {
  label: string;
  href: string;
}

export interface Props {
  links: Link[];
  type?: "normal" | "invert";
  direction?: "row" | "col";
}

function SocialLinks({ links, type = "normal", direction }: Props) {
  const color = type === "invert"
    ? "text-white hover:text-black"
    : "text-black hover:text-white";
  const bgColor = type === "invert" ? "bg-white" : "bg-black";

  return (
    <ul
      class={`flex flex-col py-[30px] lg:(flex-row py-0) ${
        direction
          ? `override:(flex-${direction} justify-center flex-wrap gap-[15px] font-bold text-[12px])`
          : ""
      }`}
    >
      {links.map(({ label, href }) => (
        <li class="p-0 lg:(py-[28px] px-[5px])">
          <a
            href={href}
            target="_blank"
            class={`lg:(font-bold text-[15px] p-[5px]) group transition-colors relative ${color}`}
          >
            {label}
            <div
              class={`absolute block transition-all duration-[250ms] ease-in-out top-0 left-0 min-w-[0%] h-full -z-[1] opacity-0 group-hover:(min-w-full opacity-100) ${bgColor}`}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
