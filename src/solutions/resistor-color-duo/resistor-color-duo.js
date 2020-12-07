import { add, indexOf, multiply } from 'ramda'

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

// const value = ([ tens, ones ]) => 10 * colorCode(tens) + colorCode(ones)

// Ramda

const colorCode = color => indexOf(color, COLORS)

// :: [String] -> number
const value = ([ tens, ones ]) => add(multiply(10, colorCode(tens)), colorCode(ones))

export {
  value
}
