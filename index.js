// Vladilen,vk.video/ This, bind,call,apply/
// function hello() {
//   console.log("Hello", this);
// }

// const person = {
//   name: "Midhat",
//   age: 25,
//   height: 180,
//   sayHello: hello,
//   sayHelloWindow: hello.bind(document),
//   loginfo: function (job, phone) {
//     console.group(`${this.name} info:`);
//     console.log(`Name is ${this.name}`);
//     console.log(`Age is ${this.age}`);
//     console.log(`Job is ${job}`);
//     console.log(`Phone is ${phone}`);
//     console.log(`Height is ${this.height}`);
//     console.groupEnd();
//   },
// };

// const lena = {
//   name: "Elena",
//   age: 23,
// };
// // person.loginfo.bind(lena, "frontend", "+79785752124")();
// // person.loginfo.call(lena, "frontend", "+79785752124");
// person.loginfo.apply(lena, ["frontend", "+79785752124"]);

// // -----------------------

// const array = [1, 2, 3, 4, 5];

// // function multBy(arr, n) {
// //   return arr.map(function (item) {
// //     return item * n;
// //   });
// // }

// Array.prototype.multBy = function (n) {
//   return this.map(function (item) {
//     return item * n;
//   });
// };

// console.log(array.multBy(30));

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

// video youtube

// kata.task
// class Addition {
//   constructor(num) {
//     this.num = num;
//   }

//   add(...nums) {
//     const sum = (a, b) => a + b;
//     return this.num + nums.reduce(sum);
//   }
// }

// Addition.prototype.add = function (...nums) {
//   const sum = (a, b) => a + b;
//   console.log("called");
//   return this.num + nums.reduce(sum);
// };

// const startedValue = new Addition(5);
// const result = startedValue.add(3, 5, 6); //В консоль выводится "called"
// console.log(result); //В консоль выводится 19

// method call
// function mul(a, b) {
//   console.log(a * b);
// }

// let double = mul.bind(null, 2);
// let triple = mul.bind(null, 3);

// // double(3);
// // double(4);
// // double(5);

// triple(3);
// triple(4);
// triple(5);

let printValue = (x) => {
  // тут что-то сложное и ресурсоёмкое
  return x * 2;
};

// printValue(2);
// printValue(2);
// printValue(2);

// const cashingDecorator = (func) => {
//   let cache = new Map();

//   return function (x) {
//     if (cache.has(x)) {
//       console.log("i in cache");
//       return cache.get(x);
//     }
//     console.log("in not in cache");
//     let result = func(x);
//     cache.set(x, result);

//     return result;
//   };
// };

// const printValue2 = cashingDecorator(printValue);

// console.log(printValue2(2));
// console.log(printValue2(2));

// Флаги и дескрипторы свойств
// Геттеры и сеттеры

const user = {
  name: "Vitaliy",
  age: 30,
  city: "sdfsfd",
};

console.log(Object.getOwnPropertyDescriptor(user, "name"));

Object.defineProperties(user, {
  name: {
    writable: false, // запрещаем изменять
    enumerable: false, // запрещаем перечислять в циклах
    configurable: false, // запрещаем удалять
  },
  age: {
    writable: false, // запрещаем изменять
    enumerable: false, // запрещаем перечислять в циклах
    configurable: false, // запрещаем удалять
  },
});

console.log(Object.getOwnPropertyDescriptor(user, "name"));

user.name = "Mishat";

console.log(user);

for (let key in user) {
  console.log(user[key]);
}

delete user.name;
console.log(user);
