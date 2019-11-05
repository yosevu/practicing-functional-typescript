import { __, curry, divide, invoker, pipe, } from 'ramda';

// Version 1
// const EARTH_YEAR_IN_SECONDS = 31557600;
// const EARTH_YEARS_ON = {
//   earth: 1,
//   jupiter: 11.862615,
//   mars: 1.8808158,
//   mercury: 0.2408467,
//   neptune: 164.79132,
//   saturn: 29.447498,
//   uranus: 84.016846,
//   venus: 0.61519726,
// };

// age :: (string, number) -> number
// const age = (planet, ageInSeconds) => {
//   const earthYears = ageInSeconds / EARTH_YEAR_IN_SECONDS;
//   const planetYears = earthYears / EARTH_YEARS_ON[planet];

//   return Number(planetYears.toFixed(2));
// };

// Version 2
// const EARTH_YEAR_IN_SECONDS = 31557600;
// const EARTH_YEARS_ON = Object.freeze({
//   earth: 1,
//   jupiter: 11.862615,
//   mars: 1.8808158,
//   mercury: 0.2408467,
//   neptune: 164.79132,
//   saturn: 29.447498,
//   uranus: 84.016846,
//   venus: 0.61519726,
// });

// age :: (string, number) -> number
// const age = (planet, ageInSeconds) => pipe(
//   divide(__, EARTH_YEAR_IN_SECONDS),
//   divide(__, EARTH_YEARS_ON[planet]),
//   invoker(1, 'toFixed')(2),
//   Number
// )(ageInSeconds);

// Version 3
const EARTH_YEAR_IN_SECONDS = 31557600;
const EARTH_YEARS_ON = Object.freeze({
  earth: 1,
  jupiter: 11.862615,
  mars: 1.8808158,
  mercury: 0.2408467,
  neptune: 164.79132,
  saturn: 29.447498,
  uranus: 84.016846,
  venus: 0.61519726,
});

// earthYears :: number -> number
const earthYears = ageIndSeconds => divide(ageIndSeconds, EARTH_YEAR_IN_SECONDS);

// yearsOnPlanet :: number -> number
const yearsOn = curry((planet, earthYears) => divide(earthYears, EARTH_YEARS_ON[planet]));

// age :: (string, number) -> number
const age = (planet, ageInSeconds) => pipe(
    earthYears,
    yearsOn(planet),
    invoker(1, 'toFixed')(2),
    Number
  )(ageInSeconds);

export {
  age
};
