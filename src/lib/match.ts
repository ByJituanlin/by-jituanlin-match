import { AnyFunction } from './types';

type NotFunction<T> = Exclude<T, AnyFunction>;

const match = <T>(value: T & NotFunction<T>) => <
  R0,
  R1 = never,
  R2 = never,
  R3 = never,
  R4 = never,
  R5 = never,
  R6 = never,
  R7 = never,
  R8 = never,
  R9 = never,
  R10 = never,
  R11 = never
>(
  ...preAndActionPairs: [
    [
      ((a: T) => boolean) | (T & NotFunction<T>),
      ((a: T) => R0) | R0 & NotFunction<R0>
    ],
    [
      ((a: T) => boolean) | (T & NotFunction<T>),
      ((a: T) => R1) | R1 & NotFunction<R1>
    ]?,
    [
      ((a: T) => boolean) | (T & NotFunction<T>),
      ((a: T) => R2) | R2 & NotFunction<R2>
    ]?,
    [
      ((a: T) => boolean) | (T & NotFunction<T>),
      ((a: T) => R3) | R3 & NotFunction<R3>
    ]?,
    [
      ((a: T) => boolean) | (T & NotFunction<T>),
      ((a: T) => R4) | R4 & NotFunction<R4>
    ]?,
    [
      ((a: T) => boolean) | (T & NotFunction<T>),
      ((a: T) => R5) | R5 & NotFunction<R5>
    ]?,
    [
      ((a: T) => boolean) | (T & NotFunction<T>),
      ((a: T) => R6) | R6 & NotFunction<R6>
    ]?,
    [
      ((a: T) => boolean) | (T & NotFunction<T>),
      ((a: T) => R7) | R7 & NotFunction<R7>
    ]?,
    [
      ((a: T) => boolean) | (T & NotFunction<T>),
      ((a: T) => R8) | R8 & NotFunction<R8>
    ]?,
    [
      ((a: T) => boolean) | (T & NotFunction<T>),
      ((a: T) => R9) | R9 & NotFunction<R9>
    ]?,
    [
      ((a: T) => boolean) | (T & NotFunction<T>),
      ((a: T) => R10) | R10 & NotFunction<R10>
    ]?,
    [
      ((a: T) => boolean) | (T & NotFunction<T>),
      ((a: T) => R11) | R11 & NotFunction<R11>
    ]?
  ]
): R0 | R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | R10 | R11 | null => {
  // @ts-ignore
  for (const [pre, action] of preAndActionPairs) {
    if (
      (typeof pre === 'function' && (pre as (a: T) => boolean)(value)) ||
      value === pre
    ) {
      const result =
        typeof action === 'function' ? (action as AnyFunction)(value) : action;
      if (result !== null) {
        return result;
      }
    }
  }
  return null;
};

export default match;
