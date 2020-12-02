import { indexOf } from 'ramda'

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
  'white',
]

// colorCode :: String -> Number
const colorCode = color => indexOf(color, COLORS)

export {
  COLORS,
  colorCode
}
