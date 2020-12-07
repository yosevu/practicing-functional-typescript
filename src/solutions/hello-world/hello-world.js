import { always } from 'ramda'

// Core JavaScript

// const hello = () => 'Hello, World!'

// Ramda

// hello :: () -> String
const hello = always('Hello, World!')

export {
  hello,
}
