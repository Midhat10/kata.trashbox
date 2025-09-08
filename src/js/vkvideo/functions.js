// функция и прочее

// function sayHello(firstName = "Default", lastName = "Default") {
//   if (!firstName) return console.error("Error, why?");
//   console.log(firstName, lastName);
//   console.log("hello");
//   return `Hello ${firstName} ${lastName}`;
// }
// let res = sayHello("midhat", "Fark");
// let res2 = sayHello("middf", "gdfsk") + "!";
// let res3 = sayHello(null);
// console.log(res);
// console.log(res2);
// console.log(res3);

// let x = 10;

// function foo(x) {
//   x = 20;
//   console.log(x);
//   return x;
// }

// foo();

// console.log(x);

// const user = {
//   name: "Midhat",
//   age: 28,
// };

// function getObj(obj) {
//   obj.name = "Mid";
// }

// getObj(user);

// console.log(user);

// const square = function (x) {
//   return x * x;
// };

// (function (msg) {
//   console.log(msg);
// })("Hello wordl");

// function checkAge(age) {
//   age > 18 ? true : confirm("Родители разрешили?");
// }

// checkAge(16);

// function checkAge1(age) {
//   let a = age > 18 || confirm("Родители разрешили?");
//   return a;
// }

// checkAge1(19);

// function min(a, b) {
//   return console.log(a > b ? b : a);
// }

// min(2, 5) == 2;
// min(3, -1) == -1;
// min(1, 1) == 1;

// function pow(x, n) {
//   if (!Number.isInteger(n)) {
//     return console.error("n - unnatural");
//   }
//   let f = x;
//   for (let i = 1; i < n; i++) {
//     f *= x;
//   }
//   return f;
// }

// console.log(pow(3, 4));
