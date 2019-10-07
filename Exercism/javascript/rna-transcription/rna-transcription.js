import { always, ifElse, isNil, join, map, pipe, split } from 'ramda';

/* Version 1 */

// const NUCLEOTIDES = {
//   G: 'C',
//   C: 'G',
//   T: 'A',
//   A: 'U',
// };

// const toRna = nucleotides => {
//   if (!nucleotides) {
//     return '';
//   }

//   return nucleotides
//     .split('')
//     .map(nucleotide => NUCLEOTIDES[nucleotide])
//     .join('');
// };

/* Version 2 */

// const NUCLEOTIDES = {
//   G: 'C',
//   C: 'G',
//   T: 'A',
//   A: 'U',
// };

// mapNucleotides :: String -> String
// const mapNucleotides = nucleotides => {
//   return nucleotides
//     .split('')
//     .map(nucleotide => NUCLEOTIDES[nucleotide])
//     .join('');
// };

// const toRna = nucleotides => {
//   const rna = nucleotides ? mapNucleotides(nucleotides) : '';

//   return rna;
// };

/* Version 3 */

const NUCLEOTIDES = Object.freeze({
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
});

// lookUpNucleotide :: String -> String
const lookUpNucleotide = nucleotide => NUCLEOTIDES[nucleotide];

// mapNucleotides :: String -> String
const mapNucleotides = nucleotides => pipe(
  split(''),
  map(lookUpNucleotide),
  join('')
)(nucleotides);

// toRna :: String -> String
const toRna = nucleotides => ifElse(
  isNil,
  always(''),
  mapNucleotides
)(nucleotides);

export {
  toRna
};
