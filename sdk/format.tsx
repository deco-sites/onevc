export const formatPrice = (
  price: number | undefined,
  currency: string,
  locale = "pt-BR",
) => {
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  });

  if (!price) {
    return null;
  }

  return formatter.format(price);
};

export const slugify = (str: string): string =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const replaceBreakLines = (str: string) =>
  str.split("<br>").map((line) =>
    line
      ? (
        <p key={line}>
          {line}
        </p>
      )
      : null
  );

export const getPercentage = (n: number) => Number((100 / n).toFixed(2));
