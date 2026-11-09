// "Barah brand" -> "BarahBrand" (identifier-style names, like `class AccuKnox`).
export const pascal = (s: string) =>
  s
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join("")
    .replace(/[^A-Za-z0-9]/g, "");
