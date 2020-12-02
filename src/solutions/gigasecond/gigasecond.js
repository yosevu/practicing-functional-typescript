import { add, construct, pipe } from 'ramda'

/* Core JavaScript */

const gigasecond = utcDate => new Date(Number(utcDate) + 10E11)

/* Ramda */
// const gigasecond = utcDate => pipe(
  // Number,
  // construct(Date),
  // add(10E11)
// )(utcDate)


export {
  gigasecond
}
