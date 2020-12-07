import { join, map, pipe, split } from 'ramda'

const NUCLEOTIDES = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
}

// Core JavaScript

// const toRna = dnaStrand => dnaStrand
//       .split('')
//       .map(nucleotide => NUCLEOTIDES[nucleotide])
//       .join('')

// Ramda

// :: String -> String
const toRna = dnaStrand => pipe(
  split(''),
  map(nucleotide => NUCLEOTIDES[nucleotide]),
  join('')
)(dnaStrand)

export {
  toRna
}
