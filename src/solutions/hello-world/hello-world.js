import { always } from 'ramda'

/* Core JavaScript */

// hello :: () -> string
// const hello = () => 'Hello, World!'

/* Ramda */

// hello :: () -> String
const hello = always('Hello, World!')

export {
  hello,
}
