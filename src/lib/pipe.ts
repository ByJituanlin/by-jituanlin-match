
export default function pipe<I, R1>(input: I, f1: (a: I) => R1): R1
export default function pipe<I, R0, R1>(input: I, f0: (a: I) => R0, f1: (a: R0) => R1): R1;
export default function pipe<I, R0, R1, R2>(input: I, f0: (a: I) => R0, f1: (a: R0) => R1, f2: (a: R1) => R2): R2;
export default function pipe<I, R0, R1, R2, R3>(input: I, f0: (a: I) => R0, f1: (a: R0) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3): R3;
export default function pipe<I, R0, R1, R2, R3, R4>(input: I, f0: (a: I) => R0, f1: (a: R0) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4): R4;
export default function pipe<I, R0, R1, R2, R3, R4, R5>(input: I, f0: (a: I) => R0, f1: (a: R0) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5): R5;
export default function pipe<I, R0, R1, R2, R3, R4, R5, R6>(input: I, f0: (a: I) => R0, f1: (a: R0) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6): R6;
export default function pipe<I, R0, R1, R2, R3, R4, R5, R6, R7>(input: I, f0: (a: I) => R0, f1: (a: R0) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7): R7;
export default function pipe<I, R0, R1, R2, R3, R4, R5, R6, R7, R8>(input: I, f0: (a: I) => R0, f1: (a: R0) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, f8: (a: R7) => R8): R8;
export default function pipe<I, R0, R1, R2, R3, R4, R5, R6, R7, R8, R9>(input: I, f0: (a: I) => R0, f1: (a: R0) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, f8: (a: R7) => R8, f9: (a: R8) => R9): R9;
export default function pipe<I, R0, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10>(input: I, f0: (a: I) => R0, f1: (a: R0) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, f8: (a: R7) => R8, f9: (a: R8) => R9, f10: (a: R9) => R10): R10;
export default function pipe<I, R0, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R11>(input: I, f0: (a: I) => R0, f1: (a: R0) => R1, f2: (a: R1) => R2, f3: (a: R2) => R3, f4: (a: R3) => R4, f5: (a: R4) => R5, f6: (a: R5) => R6, f7: (a: R6) => R7, f8: (a: R7) => R8, f9: (a: R8) => R9, f10: (a: R9) => R10, f11: (a: R10) => R11): R11

export default function pipe(input: any, ...transforms: Array<(a: any) => any>): any {
  return transforms.reduce(
    (result, f) => f(result),
    input
  );
}
