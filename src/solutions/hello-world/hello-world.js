import { always, identity } from 'ramda';

/* Hello: Version 1 */

// () -> string
// const hello = () => 'Hello, World!';

/* Hello: Version 2 */

// () -> string
const hello = always('Hello, World!');

/* Greet: Version 1 */

// helloWorld :: String -> String
// const hello = greeting => greeting;

/* Greet: Version 2 */

// greet :: String -> String
const greet = greeting => identity(greeting);

export { greet, hello };
