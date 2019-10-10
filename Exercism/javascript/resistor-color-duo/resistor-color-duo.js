import { indexOf, join, map, pipe, take } from 'ramda';

/* Version 1 */

// const COLORS = [
//   'black',
//   'brown',
//   'red',
//   'orange',
//   'yellow',
//   'green',
//   'blue',
//   'violet',
//   'grey',
//   'white'
// ];

// colorCode :: String -> Number
// const colorCode = color => COLORS.indexOf(color);

// value :: [String] -> number
// const value = colorNames => {
//   const colorCodes = colorNames
//     .map(colorCode)
//     .slice(0, 2)
//     .join('');

//   return Number(colorCodes);
// };

/* Version 2 */

const COLORS = Object.freeze([
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
]);

// colorCode :: String -> Number
const colorCode = color => indexOf(color, COLORS);

// value :: [String] -> number
const value = colorNames => pipe(
  map(colorCode),
  take(2),
  join(''),
  Number
)(colorNames);

export {
  value
};
