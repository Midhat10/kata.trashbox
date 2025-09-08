// 13 задач.

// 1 Переведите текст вида border-left-width в borderLeftWidth

// function camelize(str) {
//   return str
//     .split("-")
//     .map((item, index) => {
//       if (index === 0) {
//         return item.toLowerCase();
//       }
//       return item.charAt(0).toUpperCase() + item.slice(1);
//     })
//     .join("");
// }

// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

// 2 Фильтрация по диапазону

// let arr = [5, 3, 8, 1];

// function filterRange(arr, a, b) {
//   return arr.filter((item) => item >= a && item <= b);
// }

// let filtered = filterRange(arr, 1, 4);

// console.log(filtered); // 3,1 (совпадающие значения)

// console.log(arr); // 5,3,8,1 (без изменений)

// 3.Фильтрация по диапозону на месте

// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];

//     if (val < a || val > b) {
//       arr.splice(i, 1);
//     }
//   }
// }

// let arr = [5, 3, 8, 1];

// console.log(filterRangeInPlace(arr, 1, 4)); // удалены числа вне диапазона 1..4

// console.log(arr); // [3, 1]

// 4 Сортировать в порядке по убыванию

// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);

// // ... ваш код для сортировки по убыванию

// console.log(arr); // 8, 5, 2, 1, -10

// 5 . Скопировать и отсортировать массив

// function copySorted(arr) {
//   let arr2 = arr.slice();
//   return arr2.sort();
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// console.log(sorted); // CSS, HTML, JavaScript
// console.log(arr); // HTML, JavaScript, CSS (без изменений)

// 6 Создать расширяемый калькулятор не решил.

// function Calculator() {

//   this.methods = {
//     "-": (a, b) => a - b,
//     "+": (a, b) => a + b
//   };

//   this.calculate = function(str) {

//     let split = str.split(' '),
//       a = +split[0],
//       op = split[1],
//       b = +split[2]

//     if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     }

//     return this.methods[op](a, b);
//   }

//   this.addMethod = function(name, func) {
//     this.methods[name] = func;
//   };
// }

// 7 Трансформировать в массив имён

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [vasya, petya, masha];

// let names = users.map((item) => item.name);

// console.log(names); // Вася, Петя, Маша

// 8 Трансформировать в объекты

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [vasya, petya, masha];

// let usersMapped = users.map((item) => ({
//   fullName: `${item.name} ${item.surname}`,
//   id: item.id,
// }));

// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */

// console.log(usersMapped[0].id); // 1
// console.log(usersMapped[0].fullName); // Вася Пупкин

// 9 Отсортировать пользователей по возрасту

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [vasya, petya, masha];

// function sortByAge(arr) {
//   arr.sort((a, b) => a.age - b.age);
//   return arr;
// }

// console.log(sortByAge(arr));

// // теперь: [vasya, masha, petya]
// console.log(arr[0].name); // Вася
// console.log(arr[1].name); // Маша
// console.log(arr[2].name); // Петя

// 10. Перемешайте массив

// let arr = [1, 2, 3];

// function shuffle(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr.push({ value: arr.shift(), rnd: Math.random() });
//     arr.sort((a, b) => b.rnd - a.rnd);
//   }
//   for (let i = 0; i < arr.length; i++) {
//     arr.push(arr.shift().value);
//   }
//   return arr;
// }

// let count = {
//   123: 0,
//   132: 0,
//   213: 0,
//   231: 0,
//   321: 0,
//   312: 0,
// };

// for (let i = 0; i < 1000000; i++) {
//   let array = [1, 2, 3];
//   shuffle(array);
//   count[array.join("")]++;
// }

// // показать количество всех возможных вариантов
// for (let key in count) {
//   console.log(`${key}: ${count[key]}`);
// }

// arr = [3, 2, 1];

// 11. Получить средний возраст
// function getAverageAge(arr) {
//   let sum = arr.reduce((acc, item) => {
//     acc += item.age;
//     return acc;
//   }, 0);
//   return sum / arr.length;
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [vasya, petya, masha];

// console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

// 12. Оставить уникальные элементы массива

// function unique(arr) {
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!arr2.includes(arr[i])) {
//       arr2.push(arr[i]);
//     }
//   }
//   return arr2;
// }

// let strings = [
//   "Иисус Христос",
//   "Иисус Христос",
//   "Слава Богу",
//   "Слава Богу",
//   "Слава Богу",
//   "Слава Богу",
//   "Иисус Христос",
//   "Иисус Христос",
//   ":-O",
// ];

// console.log(unique(strings)); // Иисус Христос, Слава Богу, :-O

// 13. Создайте объект с ключами из массива

// function groupById(arr) {
//   return arr.reduce((acc, item) => {
//     acc[item.id] = item;
//     return acc;
//   }, {});
// }

// function groupById(arr) {
//   let acc = {};
//   return arr.map((item) => {
//     acc[item.id] = item;
//     return acc;
//   })[0];
// }

// let users = [
//   { id: "john", name: "John Smith", age: 20 },
//   { id: "ann", name: "Ann Smith", age: 24 },
//   { id: "pete", name: "Pete Peterson", age: 31 },
// ];

// console.log(groupById(users));

// let usersById = groupById(users);

/*
после вызова у нас должно получиться:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/
