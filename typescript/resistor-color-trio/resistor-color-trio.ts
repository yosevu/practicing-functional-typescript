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

const METRIC_PREFIXES = ['ohms', 'kiloohms', 'megaohms', 'gigaohms'] as const;

type Color = (typeof COLORS)[number];

const colorCode = (color: Color): number => COLORS.indexOf(color);

export function decodedResistorValue(colors: readonly string[]): string {
  const validColors = colors.slice(0, 3).filter((color): color is Color => COLORS.includes(color as Color));
  const [tens, ones, zeros] = validColors.map(colorCode);

  const baseValue = tens * 10 + ones;
  const magnitude = baseValue * Math.pow(10, zeros);

  if (magnitude === 0) {
    return '0 ohms';
  }

  const exponent = Math.floor(Math.log10(magnitude) / 3);
  const adjustedValue = magnitude / Math.pow(10, exponent * 3);

  return `${adjustedValue} ${METRIC_PREFIXES[exponent]}`;
}
