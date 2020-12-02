import { always, ifElse, isNil, join, map, pipe, split } from 'ramda'

/* Core JavaScript */

const NUCLEOTIDES = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
}

// :: DNA strand (String) -> RNA strand (String)
// const transformStrand = nucleotides => nucleotides
//       .split('')
//       .map(nucleotide => NUCLEOTIDES[nucleotide])
//       .join('')

// :: DNA strand (String) -> String
// const toRna = dnaStrand => (dnaStrand ? transformStrand(dnaStrand) : '')


/* Ramda */

// const NUCLEOTIDES = {
//   G: 'C',
//   C: 'G',
//   T: 'A',
//   A: 'U',
// }

// // :: Nucleotide (String) -> Nucleotide (String)
const mapNucleotide = nucleotide => NUCLEOTIDES[nucleotide]

// :: DNA strand (String) -> RNA strand (String)
const transformStrand = dnaStrand => pipe(
  split(''),
  map(mapNucleotide),
  join('')
)(dnaStrand)

// // :: DNA strand (String) -> String
const toRna = dnaStrand => ifElse(
  isNil,
  always(''),
  transformStrand
)(dnaStrand)

export {
  toRna
}
