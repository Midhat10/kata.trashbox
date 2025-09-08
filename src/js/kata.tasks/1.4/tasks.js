// Задача 1. getField
// function getField(arr, key) {
//   return arr.map((user) => user[key]);
// }

// const data = [
//   {
//     name: "Denis",
//     age: 25,
//   },
//   {
//     name: "Ivan",
//   },
//   {
//     name: "Ann",
//     age: 18,
//   },
// ];

// console.log(getField(data, "age"));
// [25, undefined, 18]

// 2. Create Usernames

// const createUsernames = (users) => {
//   const currentYear = new Date().getFullYear();
//   return users.map((user) => {
//     user["username"] =
//       user.firstName.toLowerCase() +
//       user.lastName[0].toLowerCase() +
//       String(Number(currentYear - user.age));
//     return user;
//   });
// };

// const data = [
//   {
//     firstName: "Emily",
//     lastName: "N.",
//     country: "Ireland",
//     continent: "Europe",
//     age: 30,
//     language: "Ruby",
//   },
//   {
//     firstName: "Nor",
//     lastName: "E.",
//     country: "Malaysia",
//     continent: "Asia",
//     age: 20,
//     language: "Clojure",
//   },
// ];

// const processedData = createUsernames(data);
// console.log(processedData); // [
// // { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby',
// //  username: 'emilyn1990' },
// // { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure',
// //  username: 'nore2000' }
// // ];

// Урок 3. calculatePrice

// const data = [
//   {
//     type: "food",
//     price: 130,
//   },
//   {
//     type: "clothes",
//     price: 7300,
//   },
//   {
//     type: "other",
//     price: 1400,
//   },
// ];

// const calculatePrice = (orders = []) => {
//   return orders.reduce((acc, order) => acc + order.price, 0);
// };

// console.log(calculatePrice()); // 8830

// Урок 4.

// const data = [
//   {
//     firstName: "Gabriel",
//     lastName: "X.",
//     country: "Monaco",
//     continent: "Europe",
//     age: 49,
//     language: "PHP",
//   },
//   {
//     firstName: "Odval",
//     lastName: "F.",
//     country: "Mongolia",
//     continent: "Asia",
//     age: 38,
//     language: "Python",
//   },
//   {
//     firstName: "Emilija",
//     lastName: "S.",
//     country: "Lithuania",
//     continent: "Europe",
//     age: 19,
//     language: "Python",
//   },
//   {
//     firstName: "Sou",
//     lastName: "B.",
//     country: "Japan",
//     continent: "Asia",
//     age: 49,
//     language: "PHP",
//   },
// ];
// const getMostSenior = (humans) => {
//   return humans.filter((item, index, array) => {
//     return item.age === Math.max(...array.map((user) => user.age));
//   });
// };

// const result = getMostSenior(data);

// console.log(result);
