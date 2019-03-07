import 'jest';
import * as R from 'ramda';
import match from './match';

test('match function:  with value as predicate type and value as action', () => {
  expect(match(1)([2, 'two'], [1, 'one'])).toBe('one');
});

test('match function:  with function as predicate type and value as action', () => {
  expect(match(1)([R.is(Number), 'Number'], [R.is(Array), 'Array'])).toBe(
    'Number'
  );
});

test('match function:  with value as predicate type and action as action', () => {
  expect(match(1)([1, R.add(1)], [2, R.add(1)])).toBe(2);
});

test('match function:  with function as predicate type and function as action', () => {
  expect(match(1)([R.is(Number), R.add(1)], [R.is(Array), 'Array'])).toBe(2);
});

test('match function:  without match anything', () => {
  expect(
    match('3')([R.is(Number), R.concat('3')], [R.is(Array), 'Array'])
  ).toBe(null);
});

test('match function:  without match anything', () => {
  expect(
    match('3')([R.is(Number), R.concat('3')], [R.is(Array), 'Array'])
  ).toBe(null);
});

test('match function:  with nested match', () => {
  expect(
    match('3')(
      [R.is(Number), match('4')(['noMatch', null])],
      [R.equals('3'), true]
    )
  ).toBe(true);
});

doSomething(
  match(value)(
    [1, 'one'],
    [2, 'two'],
    [stubTrue, 'forty-two']
  )
);
