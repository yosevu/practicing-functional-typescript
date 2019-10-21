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
};

export const age = (planet, ageInSeconds) => {
  const earthYears = ageInSeconds / EARTH_YEAR_IN_SECONDS;
  const planetYears = earthYears / EARTH_YEARS_ON[planet];

  return Number(planetYears.toFixed(2));
};
