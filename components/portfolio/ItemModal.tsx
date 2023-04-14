import Image from "deco-sites/std/components/Image.tsx";
import type { Item as Props } from "./types.ts";

export function ItemModal({ image, content }: Props) {
  return (
    <div>
      <aside>
        <Image
          class=""
          src={image.src}
          alt={image.alt}
          width={215}
          height={215}
        />
        <h2>{content.title}</h2>
        <p>{content.subtitle}</p>
        {content.links
          ? (
            <ul>
              {content.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          )
          : null}
        {content.details
          ? (
            <dl>
              {content.details.map((detail) => (
                <div class="" key={detail.label}>
                  <dt>
                    {detail.label}
                  </dt>
                  <dd>
                    {detail.value}
                  </dd>
                </div>
              ))}
            </dl>
          )
          : null}
      </aside>
      <article>
        {content.description
          .split("<br>").map((line) =>
            line
              ? (
                <p key={line}>
                  {line}
                </p>
              )
              : null
          )}
      </article>
    </div>
  );
}
