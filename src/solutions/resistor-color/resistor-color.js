import { indexOf } from 'ramda';

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
//

// colorCode :: String -> Number
// const colorCode = color => COLORS.indexOf(color);

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

export {
  COLORS,
  colorCode
};
