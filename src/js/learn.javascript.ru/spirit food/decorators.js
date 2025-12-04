//learn.js spirit food

// function slow(x) {
//   // здесь могут быть ресурсоёмкие вычисления
//   console.log(`Called with ${x}`);
//   return x;
// }

// function cachingDecorator(func) {
//   let cache = new Map();

//   return function (x) {
//     console.log(x);
//     if (cache.has(x)) {
//       // если кеш содержит такой x,
//       return cache.get(x); // читаем из него результат
//     }

//     let result = func(x); // иначе, вызываем функцию

//     cache.set(x, result); // и кешируем (запоминаем) результат
//     return result;
//   };
// }

// // slow = cachingDecorator(slow);

// console.log(cachingDecorator(slow)(1)); // slow(1) кешируем
// console.log("Again: " + slow(1)); // возвращаем из кеша

// console.log(slow(2)); // slow(2) кешируем
// console.log("Again: " + slow(2)); // возвращаем из кеша

// let worker = {
//   someMethod() {
//     return 1;
//   },

//   slow(x) {
//     console.log("Called with " + x);
//     console.log(this, "sdfdsf");
//     return x * this.someMethod(); // (*)
//   },
// };

// function cachingDecorator(func) {
//   let cache = new Map();
//   return function (x) {
//     if (cache.has(x)) {
//       return cache.get(x);
//     }
//     let result = func.call(x); // теперь 'this' передаётся правильно
//     console.log(this, "dfsfdfsfd");
//     cache.set(x, result);
//     return result;
//   };
// }

// worker.slow = cachingDecorator(worker.slow); // теперь сделаем её кеширующей

// console.log(worker.slow()); // работает
// // console.log(worker.slow(2));

// Задачи. Лёрн.джс.ру
// 1. Декоратор-Шпион ---
// 2. Задерживающий декоратор

// Декоратор-шпион

// Заготовка
// let user = {
//   name: "Misha",
// };
// user.calls = [];
// user.calls.push([3, 4]);
// user.calls.push([5, 6]);
// for (let value of user.calls) {
//   console.log(value);
// }

// Сделал.

// function work(a, b) {
//   console.log(a + b);
// }

// // function spy(func) {
// //   const WrapperFunc = function (a, b) {
// //     let args = [...arguments];
// //     WrapperFunc.calls.push(args);
// //     return func(a, b);
// //   };
// //   if (!Object.hasOwn(WrapperFunc, "calls")) {
// //     WrapperFunc.calls = [];
// //   }
// //   return WrapperFunc;
// // }

// function spy(func) {
//   function wrapper(...args) {
//     // мы используем ...args вместо arguments для хранения "реального" массива в wrapper.calls
//     wrapper.calls.push(args);
//     return func.apply(this, args);
//   }

//   wrapper.calls = [];

//   return wrapper;
// }

// work = spy(work);

// console.log(work(1, 2));
// work(4, 5); // 9

// for (let args of work.calls) {
//   console.log("call:" + args.join()); // "call:1,2", "call:4,5"
// }

// // /// //

// Задерживающий декоратор

// function f(...args) {
//   console.log(...args);
// }

// function delay(f, ms) {
//   return function () {
//     setTimeout(() => {
//       return f.apply(this, arguments);
//     }, ms);
//   };
// }

// // создаём обёртки
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);

// f1000("test", "sdfsdfds"); // показывает "test" после 1000 мс
// f1500("test"); // показывает "test" после 1500 мс

// Декоратор debounce

// let _ = {
//   debounce(fn, ms) {
//     let timeout;
//     return function () {
//       clearTimeout(timeout);
//       timeout = setTimeout(() => fn.apply(this, arguments), ms);
//     };
//   },
// };

// let f = _.debounce(console.log, 1000);

// f("a");
// setTimeout(() => f("b"), 200);
// setTimeout(() => f("c"), 500);

/////////////////
// Тормозящий (throttling) декоратор

// function f(a) {
//   console.log(a);
// }

// let throttle = function (f, ms) {
//   let timeout;
//   let cache = [];
//   return function (x) {
//     if (!timeout) {
//       f(x);
//     }
//     clearInterval(timeout);
//     cache.push(x);
//     timeout = setInterval(() => {
//       f.apply(this, arguments);
//       if (cache.at(-1) === x) {
//         clearInterval(timeout);
//       }
//     }, ms);
//   };
// };

// // f1000 передаёт вызовы f максимум раз в 1000 мс
// let f1000 = throttle(f, 1000);

// f1000(1); // показывает 1
// f1000(2); // (ограничение, 1000 мс ещё нет)
// f1000(3); // (ограничение, 1000 мс ещё нет)
// // когда 1000 мс истекли ...
// // ...выводим 3, промежуточное значение 2 было проигнорировано
