type Curry1<A, R> = (a: A) => R;

interface Curry2<A0, A1, R> {
  (a0: A0): Curry1<A1, R>;

  (a0: A0, a1: A1): R;
}

interface Curry3<A0, A1, A2, R> {
  (a0: A0): Curry2<A1, A2, R>;

  (a0: A0, a1: A1): Curry1<A2, R>;

  (a0: A0, a1: A1, a2: A2): R;
}

interface Curry4<A0, A1, A2, A3, R> {
  (a0: A0): Curry3<A1, A2, A3, R>;

  (a0: A0, a1: A1): Curry2<A2, A3, R>;

  (a0: A0, a1: A1, a2: A2): Curry1<A3, R>;

  (a0: A0, a1: A1, a2: A2, a3: A3): R;
}

interface Curry5<A0, A1, A2, A3, A4, R> {
  (a0: A0): Curry4<A1, A2, A3, A4, R>;

  (a0: A0, a1: A1): Curry3<A2, A3, A4, R>;

  (a0: A0, a1: A1, a2: A2): Curry2<A3, A4, R>;

  (a0: A0, a1: A1, a2: A2, a3: A3): Curry1<A4, R>;

  (a0: A0, a1: A1, a2: A2, a3: A3, a4: A4): R;
}

interface Curry6<A0, A1, A2, A3, A4, A5, R> {
  (a0: A0): Curry5<A1, A2, A3, A4, A5, R>;

  (a0: A0, a1: A1): Curry4<A2, A3, A4, A5, R>;

  (a0: A0, a1: A1, a2: A2): Curry3<A3, A4, A5, R>;

  (a0: A0, a1: A1, a2: A2, a3: A3): Curry2<A4, A5, R>;

  (a0: A0, a1: A1, a2: A2, a3: A3, a4: A4): Curry1<A5, R>;

  (a0: A0, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5): R;
}

interface Curry7<A0, A1, A2, A3, A4, A5, A6, R> {
  (a0: A0): Curry6<A1, A2, A3, A4, A5, A6, R>;

  (a0: A0, a1: A1): Curry5<A2, A3, A4, A5, A6, R>;

  (a0: A0, a1: A1, a2: A2): Curry4<A3, A4, A5, A6, R>;

  (a0: A0, a1: A1, a2: A2, a3: A3): Curry3<A4, A5, A6, R>;

  (a0: A0, a1: A1, a2: A2, a3: A3, a4: A4): Curry2<A5, A6, R>;

  (a0: A0, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5): Curry1<A6, R>;

  (a0: A0, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6): R;
}

interface Curry8<A0, A1, A2, A3, A4, A5, A6, A7, R> {
  (a0: A0): Curry7<A1, A2, A3, A4, A5, A6, A7, R>;

  (a0: A0, a1: A1): Curry6<A2, A3, A4, A5, A6, A7, R>;

  (a0: A0, a1: A1, a2: A2): Curry5<A3, A4, A5, A6, A7, R>;

  (a0: A0, a1: A1, a2: A2, a3: A3): Curry4<A4, A5, A6, A7, R>;

  (a0: A0, a1: A1, a2: A2, a3: A3, a4: A4): Curry3<A5, A6, A7, R>;

  (a0: A0, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5): Curry2<A6, A7, R>;

  (a0: A0, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6): Curry1<A7, R>;

  (a0: A0, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7): R;
}

interface Curry9<A0, A1, A2, A3, A4, A5, A6, A7, A8, R> {
  (a0: A0): Curry8<A1, A2, A3, A4, A5, A6, A7, A8, R>;

  (a0: A0, a1: A1): Curry7<A2, A3, A4, A5, A6, A7, A8, R>;

  (a0: A0, a1: A1, a2: A2): Curry6<A3, A4, A5, A6, A7, A8, R>;

  (a0: A0, a1: A1, a2: A2, a3: A3): Curry5<A4, A5, A6, A7, A8, R>;

  (a0: A0, a1: A1, a2: A2, a3: A3, a4: A4): Curry4<A5, A6, A7, A8, R>;

  (a0: A0, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5): Curry3<A6, A7, A8, R>;

  (a0: A0, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6): Curry2<A7, A8, R>;

  (a0: A0, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7): Curry1<
    A8,
    R
  >;

  (a0: A0, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7, a8: A8): R;
}

interface Curry10<A0, A1, A2, A3, A4, A5, A6, A7, A8, A9, R> {
  (a0: A0): Curry9<A1, A2, A3, A4, A5, A6, A7, A8, A9, R>;

  (a0: A0, a1: A1): Curry8<A2, A3, A4, A5, A6, A7, A8, A9, R>;

  (a0: A0, a1: A1, a2: A2): Curry7<A3, A4, A5, A6, A7, A8, A9, R>;

  (a0: A0, a1: A1, a2: A2, a3: A3): Curry6<A4, A5, A6, A7, A8, A9, R>;

  (a0: A0, a1: A1, a2: A2, a3: A3, a4: A4): Curry5<A5, A6, A7, A8, A9, R>;

  (a0: A0, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5): Curry4<A6, A7, A8, A9, R>;

  (a0: A0, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6): Curry3<
    A7,
    A8,
    A9,
    R
  >;

  (a0: A0, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7): Curry2<
    A8,
    A9,
    R
  >;

  (
    a0: A0,
    a1: A1,
    a2: A2,
    a3: A3,
    a4: A4,
    a5: A5,
    a6: A6,
    a7: A7,
    a8: A8
  ): Curry1<A9, R>;

  (
    a0: A0,
    a1: A1,
    a2: A2,
    a3: A3,
    a4: A4,
    a5: A5,
    a6: A6,
    a7: A7,
    a8: A8,
    a9: A9
  ): R;
}

interface Curry11<A0, A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, R> {
  (a0: A0): Curry10<A1, A2, A3, A4, A5, A6, A7, A8, A9, A10, R>;

  (a0: A0, a1: A1): Curry9<A2, A3, A4, A5, A6, A7, A8, A9, A10, R>;

  (a0: A0, a1: A1, a2: A2): Curry8<A3, A4, A5, A6, A7, A8, A9, A10, R>;

  (a0: A0, a1: A1, a2: A2, a3: A3): Curry7<A4, A5, A6, A7, A8, A9, A10, R>;

  (a0: A0, a1: A1, a2: A2, a3: A3, a4: A4): Curry6<A5, A6, A7, A8, A9, A10, R>;

  (a0: A0, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5): Curry5<
    A6,
    A7,
    A8,
    A9,
    A10,
    R
  >;

  (a0: A0, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6): Curry4<
    A7,
    A8,
    A9,
    A10,
    R
  >;

  (a0: A0, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7): Curry3<
    A8,
    A9,
    A10,
    R
  >;

  (
    a0: A0,
    a1: A1,
    a2: A2,
    a3: A3,
    a4: A4,
    a5: A5,
    a6: A6,
    a7: A7,
    a8: A8
  ): Curry2<A9, A10, R>;

  (
    a0: A0,
    a1: A1,
    a2: A2,
    a3: A3,
    a4: A4,
    a5: A5,
    a6: A6,
    a7: A7,
    a8: A8,
    a9: A9
  ): Curry1<A10, R>;

  (
    a0: A0,
    a1: A1,
    a2: A2,
    a3: A3,
    a4: A4,
    a5: A5,
    a6: A6,
    a7: A7,
    a8: A8,
    a9: A9,
    a10: A10
  ): R;
}

export type VariadicCurry<T, R> = T extends [
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any,
  any
]
  ? Curry11<
      T[0],
      T[1],
      T[2],
      T[3],
      T[4],
      T[5],
      T[6],
      T[7],
      T[8],
      T[9],
      T[10],
      R
    >
  : T extends [any, any, any, any, any, any, any, any, any, any]
  ? Curry10<T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7], T[8], T[9], R>
  : T extends [any, any, any, any, any, any, any, any, any]
  ? Curry9<T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7], T[8], R>
  : T extends [any, any, any, any, any, any, any, any]
  ? Curry8<T[0], T[1], T[2], T[3], T[4], T[5], T[6], T[7], R>
  : T extends [any, any, any, any, any, any, any]
  ? Curry7<T[0], T[1], T[2], T[3], T[4], T[5], T[6], R>
  : T extends [any, any, any, any, any, any]
  ? Curry6<T[0], T[1], T[2], T[3], T[4], T[5], R>
  : T extends [any, any, any, any, any]
  ? Curry5<T[0], T[1], T[2], T[3], T[4], R>
  : T extends [any, any, any, any]
  ? Curry4<T[0], T[1], T[2], T[3], R>
  : T extends [any, any, any]
  ? Curry3<T[0], T[1], T[2], R>
  : T extends [any, any]
  ? Curry2<T[0], T[1], R>
  : T extends [any]
  ? Curry1<T[0], R>
  : never;
