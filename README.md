# Practicing Functional TypeScript

Why bother?

> The biggest problem in the maintenance of large-scale software systems is complexity&mdash;large systems are hard to understand.

&mdash;[_Out of the Tar Pit_](http://curtclifton.net/papers/MoseleyMarks06a.pdf)

Functions are simple. They are the simplest building blocks we have for making useful software. Simplicity matters because building software is hard. It is also easy to make building software more complex than necessary to solve the essential user problem. This [accidental complexity](https://en.wikipedia.org/wiki/No_Silver_Bullet#Summary) makes software harder to understand, harder to test, harder to maintain, more expensive, and ultimately not very fun to work with. But it doesn’t have to be that way!

The difference between [simple](https://en.wiktionary.org/wiki/simple#English) and [complex](https://en.wiktionary.org/wiki/complex#Etymology) is not just that complex things have more parts but that those parts are folded together&mdash;entwined. Working with [pure](https://github.com/hemanth/functional-programming-jargon#purity) functions and [composing](#function-composition) them to solve problems are essential functional programming skills that can be used to untwine and simplify this type of complexity.

Note: [Simple does not mean easy](https://www.youtube.com/watch?v=oytL881p-nQ&t=25s). Hard problems are still hard. Simplicity only makes a hard problem easier to think about by breaking it into independent subproblems. These subproblems are easier to understand and solve in isolation and can be composed to form the larger solution.

## Contents

- [Usage](#usage)
- [Exercises](#exercises)
- [Questions](#questions)
- [Resources](#resources)

## Start

- Clone this repository: `git clone git@github.com:yosevu/practicing-functional-javascript.git`.
- Change to the exercises directory: `cd practicing-functional-javascript/src/exercises`.
- Run tests: `npm test hello-world`.
- Run tests in watch mode: `npm watch hello-world`.
- Lint exercises: `npm run lint`.

## Exercises

This is an index of the the exercises.

1. [Hello World](https://github.com/yosevu/practicing-functional-javascript/blob/master/src/exercises/hello-world)
1. [Two Fer](https://github.com/yosevu/practicing-functional-javascript/blob/master/src/exercises/two-fer)
1. [Resistor Color](https://github.com/yosevu/practicing-functional-javascript/blob/master/src/exercises/resistor-color)
1. [Resistor Color Duo](https://github.com/yosevu/practicing-functional-javascript/blob/master/src/exercises/resistor-color-duo)
1. [Gigasecond](https://github.com/yosevu/practicing-functional-javascript/blob/master/src/exercises/gigasecond)
1. [RNA Transcription](https://github.com/yosevu/practicing-functional-javascript/blob/master/src/exercises/rna-transcription)
1. [Space Age](https://github.com/yosevu/practicing-functional-javascript/blob/master/src/exercises/space-age)

## Questions

- [What is this?](#what-is-this)
- [Why does this exist?](#why-does-this-exist)
- [Who is this for?](#who-is-this-for)
- [What is the approach?](#what-is-the-approach)

### What is this?

Practicing Functional JavaScript is a collection of [exercises](#what-is-the-approach) that help you level up your functional programming skills with JavaScript. These exercises emphasize experience and building patterns through exposure to many examples. Understanding concepts like function composition and referential transparency is more useful when you can recognize them through repeated exposure to the patterns in specific examples.

The exercises focus on the functional part of functional programming and the techniques that are available when working with [pure functions](#reference). Working with functions is the best practical place to get started  with functional programming and a great way to practice patterns that can be used in any code base.

_Note: This is not intended to cover the equally important (but more advanced topics) of structuring data and managing state and side effects._

### Why does this exist?

The purpose of Practicing Functional JavaScript is to create an example-based resource of exercises for practicing functional patterns in JavaScript, bridging the gap between imperative and functional thinking.

There are some great [functional programming resources](#resources) that use JavaScript. They give a good overview of functional programming and explain core concepts through thoughtful and engaging discussions with pertinent examples. The focus of Practicing Functional JavaScript is practice&mdash;practice to gain exposure to functional patterns and functional thinking, practice refactoring imperative to functional code, and examples to anchor functional concepts to.

### Who is this for?

Practicing Functional JavaScript is for anyone who wants to practice functional programming patterns and functional thinking in JavaScript.

This is not intended to be used on its own, especially for people who are learning to code. Functional programming is a great introduction to programming, but Practicing Functional JavaScript doesn’t try to teach the concepts, it simply provides a resource of examples for mapping those concepts to. For some great introductory resources, see [resources](#resources).

### What is the approach?

Solve each exercises in two ways.

1. Use core JavaScript functional functions, methods, and other features.
1. Use Ramda utility functions and functional programming patterns.

#### Exercism

> Code Practice and Mentorship for Everyone.

[Exercism](https://exercism.io/) is a great platform to practice programming and is the
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

Type systems are not strictly required for functional programming since the Lambda Calculus foundation that Functional Programming is based on can be typed or untyped. Whether strongly typed or dynamic like JavaScript, thinking about the type signatures of functions is a useful skill. We will use the standard [Hindley-Milner type system](https://en.wikipedia.org/wiki/Hindley%E2%80%93Milner_type_system) and annotate our functions in comments. See [Chapter 7: Hindley-Milner and Me](https://drboolean.gitbooks.io/mostly-adequate-guide-old/content/ch7.html) of Professor Frisby's Mostly Adequate Guide to Functional Programming for a fun and accessible introduction.

## Resources

- [Awesome FP JS](https://github.com/stoeffel/awesome-fp-js)
- [Awesome Functional Programming](https://github.com/xgrommx/awesome-functional-programming)
- [Clean Coders Functional Programming](https://cleancoders.com/videos?series=clean-code&subseries=functional-programming) by Robert Martin
- [Composing Software](https://medium.com/javascript-scene/composing-software-the-book-f31c77fc3ddc) by Eric Elliot
- [Functional-Light JS](https://github.com/getify/Functional-Light-JS) by Kyle Simpson (Great for beginners)
- [Functional Programming Jargon](https://github.com/hemanth/functional-programming-jargon)
- [Grokking Simplicity: Taming complex software with functional thinking](https://www.manning.com/books/grokking-simplicity) by
  Eric Normand (Great for beginners)
- James Sinclair [blog](https://jrsinclair.com/web-development/)
- [JavaScript Allongé, the "Six" Edition](https://leanpub.com/javascriptallongesix/read) by Reginald Braithwaite
- Jessica Kerr [talks](http://jessitron.com/talks.html) and [blog](https://blog.jessitron.com/)
- [Out of the Tar Pit](http://curtclifton.net/papers/MoseleyMarks06a.pdf) - Ben Mosely and Peter Marks
- [Professor Frisby’s Mostly Adequate Guide to Functional Programming](https://github.com/MostlyAdequate/mostly-adequate-guide) by Brian Lonsdorf (Great for beginners)
- [The Structure and Interpretation of Computer
  Programs](https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book.html)
  (The Wizard Book and [lectures](https://www.youtube.com/playlist?list=PLE18841CABEA24090)) by Gerald Jay Sussman and Hal Abelson
- [Thinking in Ramda](http://randycoulman.com/blog/categories/thinking-in-ramda/) by Randy Coulman (Great for beginners)
- [Why Ramda](https://fr.umio.us/why-ramda/) by Scott Sauyet
