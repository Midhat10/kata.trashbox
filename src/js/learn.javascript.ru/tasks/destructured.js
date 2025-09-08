// Задачи на Learn.js.ru
// 1. Destructuring assignment;

// let user = {
//   name: "John",
//   years: 30,
// };

// const { name, years: age, isAdmin = false } = user;

// console.log(name);
// console.log(age);
// console.log(isAdmin);

// 2. Max salary;
// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// function topSalary(salaries = null) {
//   let salary = 0;
//   let name = "";
//   for (let [key, value] of Object.entries(salaries)) {
//     if (value > salary) {
//       name = key;
//       salary = value;
//     }
//   }
//   return name;
// }

// console.log(topSalary(salaries));
