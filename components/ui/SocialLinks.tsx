export interface Link {
  label: string;
  href: string;
}

export interface Props {
  links: Link[];
  type?: "normal" | "invert";
}

function SocialLinks({ links, type = "normal" }: Props) {
  const color = type === "invert"
    ? "text-white hover:text-black"
    : "text-black hover:text-white";
  const bgColor = type === "invert" ? "bg-black" : "bg-white";

  return (
    <ul class="flex flex-col py-[30px] lg:(flex-row py-0)">
      {links.map(({ label, href }) => (
        <li class="p-0 lg:(py-[28px] px-[5px])">
          <a
            href={href}
            target="_blank"
            class={`lg:(font-bold text-[15px] px-[5px]) group transition-colors relative ${color}`}
          >
            {label}
            <div
              class={`absolute block transition-all duration-[250ms] ease-in-out top-0 left-0 w-0 h-full bg-white -z-[1] opacity-0 group-hover:(w-full opacity-100) ${bgColor}`}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
