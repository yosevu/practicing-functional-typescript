import { __, divide, invoker, pipe, } from 'ramda'

const EARTH_YEAR_IN_SECONDS = 31557600;
const EARTH_YEARS_ON = {
  earth: 1,
  jupiter: 11.862615,
  mars: 1.8808158,
  mercury: 0.2408467,
  neptune: 164.79132,
  saturn: 29.447498,
  uranus: 84.016846,
  venus: 0.61519726,
}

// Core JavaScript

// const earthYears = ageInSeconds => ageInSeconds / EARTH_YEAR_IN_SECONDS
// const planetYears = (earthYears, planet) => Number((earthYears / EARTH_YEARS_ON[planet]).toFixed(2))

// const age = (planet, ageInSeconds) =>
//   planetYears(earthYears(ageInSeconds), planet)

// Ramda

// :: (String, Number) -> Number
const age = (planet, ageInSeconds) => pipe(
  divide(__, EARTH_YEAR_IN_SECONDS),
  divide(__, EARTH_YEARS_ON[planet]),
  invoker(1, 'toFixed')(2),
  Number
)(ageInSeconds)

export {
  age
}
