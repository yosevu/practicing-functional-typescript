import { add, constructN, pipe } from 'ramda'

// Core JavaScript

// const gigasecond = utcDate => new Date(Number(utcDate) + 10E11)

// Ramda

// :: String -> String
const gigasecond = utcDate => pipe(
  Number,
  add(10E11),
  constructN(1, Date)
)(utcDate)

export {
  gigasecond
}
