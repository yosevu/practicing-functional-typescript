# Help

## Running the tests

Before trying to execute the tests, ensure the assignment folder is set-up correctly by following the installation steps, namely `corepack yarn install` and the Editor SDK setup.

Execute the tests with:

```bash
$ corepack yarn test
```

## Skipped tests

In the test suites all tests but the first have been skipped.

Once you get a test passing, you can enable the next one by changing `xit` to `it`.
Additionally tests may be grouped using `xdescribe`.
Enable the group by changing that to `describe`.
Finally, some exercises may have optional tests `it.skip`.
Remove `.skip` to execute the optional test.

## Submitting your solution

You can submit your solution using the `exercism submit hello-world.ts` command.
This command will upload your solution to the Exercism website and print the solution page's URL.

It's possible to submit an incomplete solution which allows you to:

- See how others have completed the exercise
- Request help from a mentor

## Need to get help?

If you'd like help solving the exercise, check the following pages:

- The [TypeScript track's documentation](https://exercism.org/docs/tracks/typescript)
- The [TypeScript track's programming category on the forum](https://forum.exercism.org/c/programming/typescript)
- [Exercism's programming category on the forum](https://forum.exercism.org/c/programming/5)
- The [Frequently Asked Questions](https://exercism.org/docs/using/faqs)

Should those resources not suffice, you could submit your (incomplete) solution to request mentoring.

To get help if you're having trouble, you can use one of the following resources:

- [TypeScript QuickStart](https://www.typescriptlang.org/docs/handbook/release-notes/overview.html)
- [ECMAScript 2015 Language Specification](https://www.ecma-international.org/wp-content/uploads/ECMA-262_6th_edition_june_2015.pdf) (pdf)
- [Mozilla JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [/r/typescript](https://www.reddit.com/r/typescript) is the TypeScript subreddit.
- [StackOverflow](https://stackoverflow.com/questions/tagged/typescript) can be used to search for your problem and see if it has been answered already. You can also ask and answer questions.