export function getDirection(locale: string | undefined) {
  if (!locale) return "rtl";
  const rtlLanguages = ["ar"];
  return rtlLanguages.includes(locale) ? "rtl" : "ltr";
}
