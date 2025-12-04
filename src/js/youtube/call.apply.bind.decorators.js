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

// let printValue = (x) => {
//   // тут что-то сложное и ресурсоёмкое
//   return x * 2;
// };

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
