import { indexOf } from 'ramda'

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

// Core JavaScript

// const colorCode = color => COLORS.indexOf(color)

// Ramda

// :: String -> Number
const colorCode = color => indexOf(color, COLORS)

export {
  COLORS,
  colorCode
}
