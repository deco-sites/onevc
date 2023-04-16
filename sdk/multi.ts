export type Dispatcher<Value> = (elem: Value) => unknown;

export type RootDispatcher<Key, Value> = (elem: Value) => Key;

export type Method<Key, Value> = { value: Key; fn: Dispatcher<Value> };

export const method = <Key, Value>(
  value: Key,
  fn: Dispatcher<Value>,
): Method<Key, Value> => {
  return { value, fn };
};

export const multi = <Key, Value>(
  dispatcher: RootDispatcher<Key, Value>,
  ...methods: Method<Key, Value>[]
) => {
  return (originalFn?: RootDispatcher<Key, Value>) => {
    return (elem: Value) => {
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
