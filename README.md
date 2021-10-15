# Асинхронность ДЗ

## Задание

Реализовать функцию reduce с использованием асинхронного API из объекта Homework

Сигнатура функции:

```typescript
type reduce = (
  array: AsyncArray
  fn: (
      acc: any,
      cur: any,
      i: number,
      src: AsyncArray,
      cb: (result: any) => void
  ) => void
  initialValue: any
  cb: (result: any) => void
) => void
```

Пример:

```js
const asyncArray = new Homework.AsyncArray([1, 2, 3, 4]);
const reducerSum = (acc, curr, i, src, cb) => Homework.add(acc, curr, cb);

reduce(asyncArray, reducerSum, 0, (res) => {
  console.log(res); // 10
});
```
