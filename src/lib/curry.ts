import { VariadicCurry } from './types';

const curry = <T extends any[], R>(
  f: (...args: T) => R,
  n: number = f.length
): VariadicCurry<T, R> =>
  (((...args: Partial<T>) =>
    args.length === n
      ? f.apply(null, args as T)
      : curry(
          (...$args: Partial<T>) => f.apply(null, args.concat($args) as T),
          n - args.length
        )) as unknown) as VariadicCurry<T, R>;

export default curry;
