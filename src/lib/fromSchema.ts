type AfterSchema<T> = {
  [K in keyof T]: T[K] extends (...args: any) => infer R ? R : never
};

export function fromSchema<I, S extends { [C in keyof S]: (a: I) => any }>(
  schema: S,
  input: I
): AfterSchema<S> {
  return Object.keys(schema).reduce((result, key) => {
    // @ts-ignore
    result[key] = schema[key](input);
    return result;
  }, {}) as AfterSchema<S>;
}
