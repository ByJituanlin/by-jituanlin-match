const R = require('ramda');
const { prettierAndCopy } = require('../utils');

const g = n => `
export type VariadicCurry<T, R> =${R.range(1, n)
  .map(
    i =>
      `T extends [${R.range(0, n - i)
        .map(R.always('any'))
        .join(',')}]?Curry${n - i}<${R.range(0, n - i)
        .map(j => `T[${j}],`)
        .join('')} R>`
  )
  .join(':\n')}
  : never;
`;

prettierAndCopy(g(12));
