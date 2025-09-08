// Замыкание,

// function createCalcFunction(n) {
//   return function () {
//     console.log(1000 * n);
//   };
// }

// const calc = createCalcFunction(42);
// calc();

// function createIncrementor(n) {
//   return function (num) {
//     return n + num;
//   };
// }

// const addOne = createIncrementor(1);
// const addTen = createIncrementor(10);

// console.log(addOne(10));
// console.log(addOne(41));
// console.log(addTen(10));
// console.log(addTen(41));

// function urlGenerator(domain) {
//   return function (url) {
//     return `https://${url}.${domain}`;
//   };
// }

// const comUrl = urlGenerator("com");
// const ruUrl = urlGenerator("ru");

// console.log(comUrl("google"));
// console.log(comUrl("netflix"));
// console.log(ruUrl("yandex"));
// console.log(ruUrl("vkontakte"));
// console.log(comUrl("vkontakte"));

// function logPerson() {
//   console.log(`Person: ${this.name},${this.age},${this.job}`);
// }

// const person1 = {
//   name: "Midhat",
//   age: 28,
//   job: "non-job",
// };

// const person2 = {
//   name: "Idel",
//   age: 24,
//   job: "developer",
// };

// function bind(context, fn) {
//   return function () {
//     fn.apply(context);
//   };
// }

// bind(person1, logPerson)();
// bind(person2, logPerson)();

// let a = 0;

// function countSave(a = 0) {
//   return function () {
//     a++;
//     console.log(a);
//   };
// }

// const counta = countSave();
// counta();
// counta();
// counta();

// function cs2() {
//   let c = 0;
//   return function () {
//     c++;
//     console.log(c);
//   };
// }

// let d = cs2();
// console.log(d);

// function makeCounter() {
//   let count = 0;

//   return function () {
//     return count++;
//   };
// }

// let counter = makeCounter();

// console.log(counter());
// console.log(counter());

// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// console.log(sum(1)(2));
// let arr = [1, 2, 3, 4, 5, 6, 7];

// function inBetween(a, b) {
//   return function (x) {
//     return x >= a && x <= b;
//   };
// }

// function inArray(arr) {
//   return function (x) {
//     return arr.includes(x);
//   };
// }

// console.log(arr.filter(inBetween(3, 5)));
// console.log(arr.filter(inArray([1, 2, 10])));
