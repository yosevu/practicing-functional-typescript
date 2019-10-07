import { always, ifElse, isNil } from 'ramda';

/* Version 1 */

// twoFer :: String -> String
// const twoFer = name => {
//   if (!name) {
//     return 'One for you, one for me.';
//   }

//   return `One for ${name}, one for me.`;
// };

/* Version 2 */

// twoFer :: String -> String
// const twoFer = name =>
  // name ? `One for ${name}, one for me.` : 'One for you, one for me.';

/* Version 3 */

// interpolateName :: String -> String
const interpolateName = name => `One for ${name}, one for me.`;

// twoFer :: String -> String
const twoFer = name =>
  ifElse(
    isNil,
    always('One for you, one for me.'),
    interpolateName
  )(name);

export { twoFer };
