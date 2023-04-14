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
