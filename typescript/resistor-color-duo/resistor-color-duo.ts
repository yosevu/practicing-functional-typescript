const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
] as const;

type Color = (typeof COLORS)[number];

const isColor = (color: string): color is Color => COLORS.includes(color as Color);

const validateColors = (colors: readonly string[]): readonly Color[] => {
  if (colors.length < 2) {
    throw new Error('At least two colors need to be present');
  }
  return colors.slice(0, 2).filter(isColor) as readonly Color[];
};

const colorCode = (color: Color) => COLORS.indexOf(color);

export const decodedValue = (colors: readonly string[]): number => {
  const [tens, ones] = validateColors(colors);
  return 10 * colorCode(tens) + colorCode(ones);
};
