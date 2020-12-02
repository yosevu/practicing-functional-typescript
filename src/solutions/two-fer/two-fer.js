import { always, curry, ifElse, isNil } from 'ramda'

/* Core JavaScript */

// twoFer :: String -> String
// const twoFer = name =>
//       name ? `One for ${name}, one for me.` : 'One for you, one for me.'


/* Ramda */

// interpolate :: String -> String -> String -> String
const interpolate = curry((before, after, value) => before + value + after)

// twoFer :: String -> String
const twoFer = name =>
  ifElse(
    isNil,
    always('One for you, one for me.'),
    interpolate('One for ', ', one for me.')
  )(name);

export { 
  twoFer,
}
