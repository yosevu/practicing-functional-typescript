# Practicing Functional JavaScript

Why bother?

> The biggest problem in the maintenance of large-scale software systems is complexity &mdash; large systems are hard to understand.

&mdash; [_Out of the Tar Pit_](http://curtclifton.net/papers/MoseleyMarks06a.pdf)

Functions are simple. They are the simplest building blocks we have for making useful software. Simplicity matters because building software is hard. It is also easy to make it harder by making it more complex than necessary to solve the essential user problem. It doesn't have to be hard because of this [accidental complexity](https://en.wikipedia.org/wiki/No_Silver_Bullet#Summary) that makes software hard to understand, hard to test, hard to maintain, expensive, and ultimately not very fun to work with.

The difference between [simple](https://en.wiktionary.org/wiki/simple#English) and [complex](https://en.wiktionary.org/wiki/complex#Etymology) is not just that complex things have more parts, but that those parts are folded together&mdash;entwined. This is the type of complexity that can be simplified with functions.

Note: [Simple does not mean easy](https://www.youtube.com/watch?v=oytL881p-nQ&t=25s). Hard problems are still hard. Simplicity only makes a hard problem easier to think about by breaking the problem into independent subproblems. These subproblems are easier to understand and solve in isolation and can be composed to form the larger solution.

## Contents

- [Usage](#usage)
- [Exercises](#exercises)
- [Questions](#questions)
- [Reference](#reference)
- [Resources](#resources)

## Usage

- Clone this repository: `git clone git@github.com:yosevukilonzo/practicing-functional-javascript.git`.
- Change to the exercises directory: `cd practicing-functional-javascript/src/exercises`.
- Run tests: `npm test hello-world`.
- Run tests in watch mode: `npm watch hello-world`.
- Lint exercises: `npm run lint`.

## Exercises

😌 Less thinking 😰 More thinking

- [Hello World](#hello-world)
- [Two Fer](#two-fer)
- [Resistor Color](#resistor-color)
- [Resistor Color Duo](#resistor-color-duo)
- [RNA Transcription](#rna-transcription)
- [Gigasecond](#gigasecond)
- [Space Age](#space-age)

### Hello World

#### Version 1

- Uses an anonymous function. 😰

```javascript
// () -> String
const hello = () => 'Hello, World!';
```

#### Version 2

- Uses a declarative, composable function to indicate a constant. 😌

```javascript
// () -> String
const hello = always('Hello, World!');
```

### Two Fer

#### Version 1

- Arrow function expression with a block body. 😰

```javascript
const twoFer = name => { // block start
  // do this
  // do this
  // ...
} // block end
```

- Imperative `if` statement. 😰

```javascript
if (!name) { // block start, does not produce a value
  // do this
  // do this
  // ...
} // block end
```

- Imperative operator `!`.
  - Uses a symbol for logical negation rather than a descriptive of what it does, which is to check if name is one of JavaScript's 7 falsy values. 😰

```javascript
if (!name) {

}
```

- Imperative `return` statements. 😰

```javascript
const twoFer = name => {
  if (!name) {
    return 'One for you, one for me.'; // do this return
  }

  return `One for ${name}, one for me.`; // or do this return
};
```

- Imperative template literal interpolation. 😰

#### Version 2

- Conditional (ternary) expression.
  - No `if` statement. 😌
  - Produces a value like the function `(string?, string, string) -> string`. 😌

- Conditional (ternary) operator
  - No block statement. 😌
  - No `return` statements. 😌
  - Uses symbolic syntax `?:` rather than descriptive words that are different from typical functions. 😰
- Template literal interpolation. 😰

```javascript
const twoFer = name =>
  name ? `One for ${name}, one for me.` : 'One for you, one for me.';
```

#### Version 3

- `ifElse` function.
  - No conditional operator. 😌
- `isNil` function.
  - No conditional operator. 😌
- `interpolate` function.
  - No template literal interpolation. 😌

### Resistor Color

### Resistor Color Duo

### RNA Transcription

### Gigasecond

### Space Age

## Questions

- [What is this?](#what-is-this)
- [Why does this exist?](#why-does-this-exist)
- [Who is this for?](#who-is-this-for)
- [What is the approach?](#what-is-the-approach)

### What is this?

_Practicing Functional JavaScript_ is a collection of [exercises](#what-is-the-approach) for practicing functional programming with JavaScript. The emphasis is on experience and building patterns through exposure to many examples. Understanding concepts like function composition and referential transparency is more useful when they can be recognized through repeated exposure to the patterns in specific examples.

The exercises focus on the functional part of functional programming or the techniques that are available when working with [pure functions](#reference). Functions are the best practical place to start with functional programming and a great way to practice patterns that can easily be used in any code base.

Note: This is not intended to cover the equally important, but more advanced topics of structuring data, and managing state and side effects.

### Why does this exist?

The purpose of Practicing Functional JavaScript is to create an example-based resource of exercises for practicing functional patterns in JavaScript, bridgings the gap between imperative and functional thinking.

There are some great [functional programming books](#resources) that use JavaScript. They give a good overview of functional programming and explain core concepts through thoughtful and engaging discussions with pertinent examples. The focus of Practicing Functional JavaScript is practice. Practice to gain exposure to functional patterns and functional thinking, practice refactoring imperative to functional code, and examples to anchor functional concepts to.

### Who is this for?

Practicing Functional JavaScript is for anyone who wants to practice functional programming patterns and functional thinking in JavaScript by refactoring exercises from imperative to functional solutions.

This is not intended to be used on its own, especially for people who are just starting to learn to code. Functional programming is a great introduction to programming and there are great introductory texts, but the approach doesn’t try to teach the concepts, it simply provides a resource of examples for mapping those concepts to.

### What is the approach?

#### Exercism

> Code Practice and Mentorship for Everyone.

[Exercism](https://exercism.io/) is a great platform to practice programming and the
foundation for Practicing Functional JavaScript for three main reasons:

1. 101 open source JavaScript exercises
1. Test-driven
1. Modern JavaScript development environment and tooling

#### ESLint and eslint-plugin-functional

> A pluggable and configurable linter tool for identifying and reporting on
> patterns in JavaScript.

> ESLint rules to disable mutation and promote fp in JavaScript and TypeScript.

Linting is great for learning because it can help you begin to notice patterns
and think about concepts that you may not have been aware of. In a
multi-paradigm language as flexible as JavaScript, linting is
essential for writing understandable and maintainable code. [ESLint](https://eslint.org/) is great
because it is configurable and customizable with plugins like
[eslint-plugin-functional](https://github.com/jonaskello/eslint-plugin-functional).
This plugin enforces functional patterns and is also a great source of
practical information about functional programming.

#### Ramda

> A practical functional library for JavaScript programmers.

Ramda is a popular JavaScript functional programming library. It is practical, easy to get started with, and it provides a flexible set of utilities to start using the functional
concepts and patterns that you don’t get out of the box with JavaScript. It also
has great documentation and a great community. There is a wealth of information
to learn from and understand functional programming.

#### Hindley Milner Types

> A classical type system for the lambda calculus with parametric polymorphism.

Type systems are not strictly required for functional programming since the Lambda Calculus foundation that Functional Programming is based on can be typed or untyped. Whether strongly typed or dynamic like JavaScript, practice thinking about the type signatures of functions is a useful skill. We will use the most widely understood type annotations: The [Hindley-Milner type system](https://en.wikipedia.org/wiki/Hindley%E2%80%93Milner_type_system). See [Chapter 7: Hindley-Milner and Me](https://drboolean.gitbooks.io/mostly-adequate-guide-old/content/ch7.html) of Professor Frisby's Mostly Adequate Guide to Functional Programming for a fun and accessible introduction.

## Reference

- Action
- Declarative: what to do
- Expression: evaluates to a value
- Imperative: how to do something
- Pure Function: A function which has a return value that is only affected by its input parameters, no side effects. See [Purity](https://github.com/hemanth/functional-programming-jargon#purity) and [Pure Function](https://en.wikipedia.org/wiki/Pure_function).
- Side effect: Relies on reading or writing to a variable or reference outside of the function. Performs an action outside of the function.
- Statement: performs an action

## Resources

- Clean Coders Functional Programming by Robert Martin
- Composing Software by Eric Elliot
- Functional-Light JS by Kyle Simpson
- Grokking Simplicity by Eric Normand
- JavaScript Allongé, the "Six" Edition by Reginald Braithwaite
- Jessica Kerr [talks](http://jessitron.com/talks.html) and [blog](https://blog.jessitron.com/)
- [Out of the Tar Pit](http://curtclifton.net/papers/MoseleyMarks06a.pdf) - Ben Mosely and Peter Marks
- Professor Frisby’s Mostly Adequate Guide to Functional Programming by Brian Lonsdorf
- The Structure and Interpretation of Computer Programs (The Wizard Book) by Gerald Jay Sussman and Hal Abelson