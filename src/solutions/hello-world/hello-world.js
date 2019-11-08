import { always } from 'ramda';

/* Version 1 */

// hello :: () -> string
// const hello = () => 'Hello, World!';

/* Version 2 */

// hello :: () -> String
const hello = always('Hello, World!');

export {
  hello,
};
