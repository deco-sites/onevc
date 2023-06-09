import Image from "deco-sites/std/components/Image.tsx";
import { colorHandler } from "./PortfolioItem.tsx";
import type { LabelessItem as Props } from "./types.ts";
import { replaceBreakLines } from "deco-sites/onevc/sdk/format.tsx";

export function PortfolioModal({ image, content }: Props) {
  return (
    <>
      <div class="md:(flex flex-row gap-x-[20px] items-center p-[60px]) px-[28px] pt-[60px] pb-[80px] w-full text-white">
        <aside class="md:(w-[280px] pr-[20px]) lg:(w-[330px] pr-[50px]) w-full">
          <div
            class={`${
              !content.title
                ? "border-b-1 border-white min-h-[100px] flex items-center"
                : ""
            }`}
          >
            <img
              class={`${
                colorHandler({ ...image, imageColor: content.imageColor })
              } max-w-full`}
              src={image.src}
              alt={image.alt}
            />
          </div>
          {content.title
            ? (
              <h2 class="text-[25px] leading-[30px] font-bold mt-[25px]">
                {content.title}
              </h2>
            )
            : null}
          {content.subtitle
            ? (
              <p class="px-[9px] py-[3px] mt-[15px] border-1 border-white text-[16px] leading-[19px] font-medium inline-block">
                {content.subtitle}
              </p>
            )
            : null}
          {content.links
            ? (
              <ul class="mt-[15px] flex flex-wrap text-[15px] leading-[19px] font-bold">
                {content.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      class="pr-[30px] transition-colors duration-[250ms] ease-out hover:text-[rgba(255,255,255,0.6)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )
            : null}
          {content.details
            ? (
              <dl>
                {content.details.map((detail) => {
                  const value = replaceBreakLines(detail.value);
                  return (
                    <div
                      class="mt-[30px] block leading-[19px]"
                      key={detail.label}
                    >
                      <dt class="font-bold mb-[14px] inline text-[15px]">
                        {detail.label}
                        {!detail.label.includes(":") ? ":" : ""}
                      </dt>{" "}
                      <dd
                        class={`inline children:(inline-block text-[14px] ${
                          value.length > 1 ? "mt-[14px]" : ""
                        })`}
                      >
                        {value}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            )
            : null}
        </aside>
        <article class="lg:column-count-[2] md:mt-0 flex-1 w-full mt-[65px] text-[16px] leading-[19px] children:mb-[19px]">
          {replaceBreakLines(content.description)}
        </article>
      </div>
    </>
  );
}
