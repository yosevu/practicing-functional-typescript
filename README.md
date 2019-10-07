# Practicing Functional JavaScript

## Contents

- [Setup](#setup)
- [Exercises](#exercises)
- [Questions](#questions)
- [Resources](#resources)

## Setup

- [Initial](#initial)
- [Exercise](#exercise)

### Initial

1. Sign up for an [Exercism](https://exercism.io/) account.
1. Join the [JavaScript Track](https://exercism.io/tracks/javascript).
1. Select an exercise e.g. Hello World.
1. Set up the Exercism CLI by clicking "Begin walk-through" under "Get started"
   or go to [Interactive Walkthrough](https://exercism.io/cli-walkthrough).

### Exercise

1. Download the exercise e.g. `exercism download --exercise=hello-world --track=javascript`.
1. Go to the exercise directory e.g. `cd ~/Exercism/javascript/hello-world`.
1. Install dependencies: `npm i && npm i -D eslint-plugin-functional && npm i ramda`.
1. Add `"plugin:functional/recommended"` and `"plugins": ["functional"],` to
   `.eslintrc`.
1. Ignore babel config and spec files by adding `"eslintIgnore": ["babel.config.js", "*.spec.js"],` to `package.json`.
1. Test with `npm test`.
1. Solve the exercise.
1. Lint with `npm run lint`.
1. Submit the exercise: `exercism submit /path/to/file [/path/to/file2 ...]`.

## Exercises

- [Hello World](#hello-world)
- [Two Fer](#two-fer)
- [Resistor Color](#resistor-color)
- [Resistor Color Duo](#resistor-color-duo)
- [RNA Transcription](#rna-transcription)
- [Gigasecond](#gigasecond)

### Hello World

#### Concepts:

### Two Fer

#### Concepts

- Statements and expressions
- Imperative and declarative

#### Version 1: Imperative

- Imperative block statement `{}`. 🧠
- Imperative `if` statement. 🧠
- Imperative logical operator `!`. 🧠
- Imperative `return` statements. 🧠🧠
- Imperative template literal interpolation. 🧠

#### Version 2: More Functional - No libraries

- Conditional (ternary) expression. 😌
  - No `if` statement.
- Conditional (ternary) operator. 🧠
  - No block statement `{}`.
  - No `return` statements.
- Imperative template literal interpolation. 🧠

#### Version 3: Functional - Ramda

- Uses an `ifElse` function. 😌
  - No conditional operator.
- Uses an `isNil` function. 😌
  - No conditional operator.
- Uses a function for string interpolation. 😌
  - No template literal interpolation.

### Resistor Color

#### Concepts

- Immutability and pure functions

#### Version 1

#### Version 2

### Resistor Color Duo

### RNA Transcription

### Gigasecond

## Questions

- [What is this?](#what-is-this)
- [Why does this exist?](#why-does-this-exist)
- [Who is this for?](#who-is-this-for)
- [What is the approach?](#what-is-the-approach)

### What is this?

_Practicing Functional JavaScript_ is a collection of [exercises](#what-is-the-approach) for practicing functional programming with JavaScript. The emphasis is on experience and building patterns through exposure to many examples. Understanding the meaning of words like referential transparency and function composition is more useful when the underlying concepts can be recognized through repeated exposure to the patterns and to specific examples.

The exercises focus on the functional part of functional programming or the techniques that are available when working with pure functions. Functions are the best practical entry point to functional programming and a great way to practice patterns that can easily be used in any code base. This is not intended to cover the equally important, but more advanced topics of structuring data, and managing state and side effects.

### Why does this exist?

Purpose: Create an example-based resource of exercises for practicing functional patterns in JavaScript that bridges the gap between imperative and functional thinking.

There are some great [functional programming books](#resources) that use JavaScript. They give a good overview of functional programming and explain core concepts through thoughtful and engaging discussions with pertinent examples. The focus of Practicing Functional JavaScript is practice. Practice to gain exposure to functional patterns and functional thinking, practice refactoring imperative to functional code, and examples to anchor functional concepts to.

### Who is this for?

Practicing Functional JavaScript is for anyone who wants to practice functional programming patterns and functional thinking in JavaScript by refactoring exercises from imperative to functional solutions.

This is not intended to be used on its own, especially for people who are learning to code. Functional programming is a great introduction to programming and there are great introductory texts, but the approach doesn’t try to teach the concepts, it simply provides a resource of examples for mapping those concepts to.

### What is the approach?

#### Exercism

> Code Practice and Mentorship for Everyone.

[Exercism](https://exercism.io/) is a great platform to practice programming and the
foundation for Practicing Functional JavaScript for three main reasons:

1. 99 curated JavaScript exercises.
1. Modern JavaScript development environment and tooling.
1. Exercises are driven by tests.

#### ESLint and eslint-plugin-functional

> A pluggable and configurable linter tool for identifying and reporting on
> patterns in JavaScript.

> ESLint rules to disable mutation and promote fp in JavaScript and TypeScript.

Linting is great for learning because it can help you begin to notice patterns
and think about concepts that you may not have been aware of. In a
multi-paradigm language as flexible as JavaScript, linting is
essential for wrting understandable and maintainable code. [ESLint](https://eslint.org/) is great
because it is configurable and customizable with plugins like
[eslint-plugin-functional](https://github.com/jonaskello/eslint-plugin-functional).
This plugin enforces functional patterns and is also a great source of
practical information about functional programming.

#### Ramda

> A practical functional library for JavaScript programmers.

Ramda is the easiest JavaScript library to start practicing functional
programming patterns with in JavaScript. It has a great philosophy that takes care of abstracting functional
concepts and patterns that you don’t get out of the box with JavaScript. It also
has great documentation and a great community. There is a wealth of information
to learn from and understand functional programming.

#### Hindley Milner Types

> A classical type system for the lambda calculus with parametric polymorphism.

Type systems are not strictly required for functional programming since the Lambda Calculus foundation that Functional Programming is based on can be typed or untyped. Whether a strongly typed or dynamic like JavaScript, an awareness of and practice thinking about the type signatures of functions is a useful skill. We will use the most widely understood type annotations: The Hindley-Milner Type system. See Hindley-Milner and Me for a fun and accessible introduction.

## Resources
