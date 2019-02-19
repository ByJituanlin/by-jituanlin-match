const R = require('ramda');
const { prettierAndCopy } = require('../utils');

const g = n => `
interface Curry${n}<${R.range(0, n)
  .map(i => `A${i},`)
  .join('')} R> {
  ${R.range(1, n)
    .map(
      i =>
        `(${R.range(0, i)
          .map(j => `a${j}:A${j}`)
          .join(',')}):Curry${n - i}<${R.range(i, n)
          .map(j => `A${j},`)
          .join('')}R>;`
    )
    .join('\n')}

  (${R.range(0, n)
    .map(i => `a${i}:A${i}`)
    .join(',')}): R;
}`;

prettierAndCopy(
  R.range(2, 12)
    .map(g)
    .join('\n\n')
);
