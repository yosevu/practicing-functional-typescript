export const COLOR_NAMES = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
] as const;

export const getColorCode = (colorName: typeof COLOR_NAMES[number]) =>
  COLOR_NAMES.findIndex(name => name === colorName);
