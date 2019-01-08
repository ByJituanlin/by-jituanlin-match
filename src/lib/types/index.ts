export type LastOf<A0 = never, A1 = never, A2 = never, A3 = never, A4 = never, A5 = never, A6 = never, A7 = never, A8 = never, A9 = never, A10 = never, A11 = never> =
  [A1] extends [never] ? A0 :
    [A2] extends [never] ? A1 :
      [A3] extends [never] ? A2 :
        [A4] extends [never] ? A3 :
          [A5] extends [never] ? A4 :
            [A6] extends [never] ? A5 :
              [A7] extends [never] ? A6 :
                [A8] extends [never] ? A7 :
                  [A9] extends [never] ? A8 :
                    [A10] extends [never] ? A9 :
                      [A11] extends [never] ? A10 :
                        A11


export {VariadicCurry} from './Curry'

export {AnyFunction} from './AnyFunction'
