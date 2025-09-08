// learn.js.ru proto about

// let animal = {
//   eats: true,
// };

// let rabbit = {
//   jumps: true,
// };

// rabbit.__proto__ = animal;

// console.log(rabbit);

// let animal = {
//   eats: true,
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal,
// };

// // Object.keys возвращает только собственные ключи
// console.log(Object.keys(rabbit));

// for (let prop in rabbit) console.log(prop);

// let animal = {
//   eats: true,
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal,
// };

// for (let prop in rabbit) {
//   let isOwn = rabbit.hasOwnProperty(prop);

//   if (isOwn) {
//     console.log(`Our: ${prop}`); // Our: jumps
//   } else {
//     console.log(`Inherited: ${prop}`); // Inherited: eats
//   }
// }
// console.log(rabbit);
