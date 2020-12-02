import { indexOf, join, map, pipe, take } from 'ramda'

/* Core JavaScript */

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
// ]

// colorCode :: String -> Number
// const colorCode = color => COLORS.indexOf(color)

// value :: [String] -> number
// const value = colorNames => Number(
//   colorNames
//     .map(colorCode)
//     .join('')
//     .slice(0, 2))

/* Ramda */

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
  'white'
]

// colorCode :: String -> Number
const colorCode = color => indexOf(color, COLORS)

// value :: [String] -> number
const value = colorNames => pipe(
  map(colorCode),
  join(''),
  take(2),
  Number
)(colorNames)

export {
  value
}
