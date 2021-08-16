// Filters document elements on a list of keys
const searchElemByText = (
  doc: Document,
  values: Array<string>
): Array<HTMLElement> =>
  [doc.body].filter(
    (el: Element) =>
      values.map((v: string) => el.textContent?.toLowerCase().match(v)).length >
      0
  );

export const findDiscountField = (): Array<HTMLElement> =>
  searchElemByText(document, ["discount", "coupon"]);

export const generateId = (): string => "test";
