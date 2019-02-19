import 'jest';
import curry from './curry';

test('curry function: should work will call by "()()()()" case ', () => {
  expect(
    curry((a: number, b: number, c: number, d: number) => a + b + c + d)(1)(2)(
      3
    )(4)
  ).toBe(10);
});

test('curry function: should work will call by "()()(,)" case ', () => {
  expect(
    curry((a: number, b: number, c: number, d: number) => a + b + c + d)(1)(2)(
      3,
      4
    )
  ).toBe(10);
});

test('curry function: should work will call by "(,,,)" case ', () => {
  expect(
    curry((a: number, b: number, c: number, d: number) => a + b + c + d)(
      1,
      2,
      3,
      4
    )
  ).toBe(10);
});
