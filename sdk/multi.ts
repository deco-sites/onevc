export type Dispatcher<Key, Value> = (elem: Key) => Value;

export type RootDispatcher<Key, Value> = (elem: Value) => Key;

export type Method<Key, Value, Result> = { value: Value; fn: (k: Key) => Result };

export const method = <Key, Value, Result>(
  value: Value,
  fn: Dispatcher<Key, Result>,
): Method<Key, Value, Result> => {
  return { value, fn };
};

export const multi = <Key, Value, Result>(
  dispatcher: Dispatcher<Key, Value>,
  ...methods: Method<Key, Value, Result>[]
) => {
  return (originalFn?: (x: Key) => Result) => {
    return (elem: Key) => {
      const key = dispatcher(elem);
      const current = methods.find((m) => m.value === key);
      if (!current) {
        if (originalFn) {
          return originalFn(elem);
        }
        return;
      }
      return current.fn(elem);
    };
  };
};
