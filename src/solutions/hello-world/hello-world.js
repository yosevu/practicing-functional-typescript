import { always } from 'ramda';

/* Version 1 */

// () -> string
// const hello = () => 'Hello, World!';

/* Version 2 */

// () -> string
const hello = always('Hello, World!');

export { hello };
