// Задача 2.1.2 Invert
// let obj1 = { a: 1, b: 2, c: 3, d: 3 };
// function invert(obj) {
//   let keys = Object.keys(obj);
//   let values = Object.values(obj);
//   let obj2 = {};
//   for (let i = 0; i < values.length; i++) {
//     obj2[values[i]] = keys[i];
//   }
//   return obj2;
// }

// console.log(invert(obj1)); // { 1: a, 2: b, 3: c }

// Задача 2.1.3 DeepEqual
// const firstObject = {
//   a: {
//     b: {
//       e: {
//         num: 3,
//       },
//       d: "string",
//       c: 2,
//     },
//   },
// };

// const secondObject = {
//   a: {
//     b: {
//       e: {
//         num: 3,
//       },
//       d: "string",
//       c: 2,
//     },
//   },
// };

// function deepEqual(obj1, obj2, result = true) {
//   if (
//     typeof obj1 === "object" &&
//     typeof obj2 === "object" &&
//     obj1 !== null &&
//     obj2 !== null
//   ) {
//     let keys1 = Object.keys(obj1);
//     let keys2 = Object.keys(obj2);
//     if (keys1.length === keys2.length) {
//       for (let key of keys1) {
//         let key2 = keys2[keys2.indexOf(key)]; // ключ key2, равный key, если он только существует. Даёт возможность для разброса свойств.
//         if (
//           typeof obj1[key] === "object" &&
//           keys2.includes(key) &&
//           typeof obj2[key2] === "object"
//         ) {
//           result = deepEqual(obj1[key], obj2[key2], result);
//           // console.log(result, "задействована рекурсия");
//         } else if (typeof key !== "object" && typeof key2 !== "object") {
//           // Тут как раз важен вопрос порядка.
//           if (obj1[key] !== obj2[key2]) {
//             // console.log("Последние, необъектные данные - не равны друг другу");
//             result = false;
//             return result;
//           }
//         }
//       }
//     } else {
//       // console.log("Различная длина ключей");
//       return false;
//     }
//   } else {
//     // console.log("не объекты");
//     return obj1 === obj2;
//   }
//   return result;
// }

// console.log(deepEqual(firstObject, secondObject)); // true
// console.log(deepEqual({ a: 1, b: 3 }, { b: 2, a: 1 })); // false
// console.log(deepEqual(1, 2)); // false
// console.log(deepEqual(true, false)); // false
// console.log(deepEqual(null, null));
// console.log(
//   deepEqual({ a: 4, b: { c: 4, d: 2 } }, { b: { d: 2, c: 4 }, a: 4 }),
// );

// let obj11 = { a: 4, b: 5, c: {} };
// let obj22 = { b: 5, a: 4, c: {} };

// function compireObj(arr, arr2) {
//   let keys1 = Object.keys(arr);
//   let keys2 = Object.keys(arr2);
//   for (let key of keys1) {
//     if (!keys2.includes(key)) {
//       return false;
//     }
//     return keys2.indexOf(key);
//   }
// }

// console.log(compireObj(obj11, obj22));

// 2.1.5 Задача - Суммирование неограниченного количетсва чисел.
// const sum = (...args) => {
//   let sum = 0;

//   for (let el of args) {
//     if (isFinite(el)) {
//       sum += Number(el);
//     }
//   }

//   return sum;
// };

// console.log(sum(1, 2, 3, 4, 5, 6)); // 21
// console.log(sum(-10, 15, 100)); // 105
// console.log(sum()); // 0
// console.log(sum(1, "fqwfqwf", {}, [], 3, 4, 2, true, false)); // 11. Прим: true было приведено к 1 (см. преобразование типов в js)

// 2.1.6 Задача. Объединение объектов.

// const merge = (...args) => Object.assign({}, ...args);

// console.log(
//   merge(
//     {
//       name: "John",
//       age: 22,
//     },
//     {
//       surname: "Klein",
//       age: 20,
//       profession: "student",
//     },
//     {
//       profession: "frontend developer",
//       country: "USA",
//     },
//   ),
// );

// Задача кат.академии 2.1.8 languages Statistic

// const data = [
//   {
//     firstName: "Noah",
//     lastName: "M.",
//     country: "Switzerland",
//     continent: "Europe",
//     age: 19,
//     language: "C",
//     year: 2019,
//   },
//   {
//     firstName: "Anna",
//     lastName: "R.",
//     country: "Liechtenstein",
//     continent: "Europe",
//     age: 52,
//     language: "JavaScript",
//     year: 2019,
//   },
//   {
//     firstName: "Piter",
//     lastName: "G.",
//     country: "Sweden",
//     continent: "Europe",
//     age: 30,
//     language: "JavaScript",
//     year: 2019,
//   },
//   {
//     firstName: "Ramon",
//     lastName: "R.",
//     country: "Paraguay",
//     continent: "Americas",
//     age: 29,
//     language: "Ruby",
//     year: 2014,
//   },
//   {
//     firstName: "George",
//     lastName: "B.",
//     country: "England",
//     continent: "Europe",
//     age: 81,
//     language: "C",
//     year: 2016,
//   },
// ];

// const getLanguagesStatistic = (feedbacks) => {
//   let obj = {};
//   feedbacks = feedbacks.filter((item) => item.year === 2019);
//   feedbacks = feedbacks.map((item) => item.language);
//   console.log(feedbacks);
//   for (let element of feedbacks) {
//     if (obj[element] === undefined) {
//       obj[element] = 1;
//     } else {
//       obj[element] += 1;
//     }
//   }
//   return obj;
// };

// const getLanguagesStatistic = (feedbacks) => {
//   let obj = {};
//   for (let { year, language } of feedbacks) {
//     if (year === 2019) {
//       if (obj[language] === undefined) {
//         obj[language] = 1;
//       } else {
//         obj[language] += 1;
//       }
//     }
//   }
//   return obj;
// };

// const result = getLanguagesStatistic(data);

// console.log(result);
// // {
// //   C: 1,
// //   JavaScript: 2
// // }

// Задачи с каты
// 2.1.11.getArraysCounts

// const getArraysCounts = (arr) => {
//   const map = new Map();
//   for (let key of arr) {
//     if (!map.has(key)) {
//       let value = 1;
//       map.set(key, value);
//     } else {
//       let count = map.get(key);
//       count += 1;
//       map.set(key, count);
//     }
//   }
//   return map;
// };

// const obj = { name: 123 };
// const data = [1, 1, 1, 2, 2, 2, 2, true, true, obj, obj, { name: 123 }];
// const counts = getArraysCounts(data); // экземпляр Map
// console.log(counts.get(1)); // 3
// console.log(counts.get(2)); // 4
// console.log(counts.get(true)); // 2
// console.log(counts.get(obj)); // 2

// 2.1.12 Unique

// const unique = (arr) => {
//   const set = new Set(arr);
//   return [...set];
// };

// const data1 = [1, 2, 3, 3, 4, 4];
// console.log(unique(data1)); // [1, 2, 3, 4]

// const obj = { name: "John" };
// const data2 = [obj, obj, obj, { name: "John" }];
// const result = unique(data2);
// console.log(result); // [{ name: 'John' }, { name: 'John' }]

// console.log(result[0] === obj); // true
// console.log(result[1] === obj); // false
/////
// const getDaysBetweenDates = (date, date2) => {
//   if (date === undefined || date2 == undefined) {
//     throw new TypeError();
//   }
//   const dateF = new Date(date);
//   const dateS = new Date(date2);
//   const diff = dateS - dateF;
//   let diffDay = Math.trunc(diff / 1000 / 3600 / 24);
//   if (Math.abs(diffDay) === 0) {
//     diffDay = Math.abs(diffDay);
//   }
//   return diffDay;
// };
// console.log(new Date(null));

// console.log(getDaysBetweenDates(2, 1));
// console.log(
//   getDaysBetweenDates(new Date(2011, 6, 2, 6, 0), new Date(2012, 6, 2, 18, 0)),
// );
// console.log(getDaysBetweenDates(1409796000000, 1409925600000));
// console.log(getDaysBetweenDates("1-1-2020", "дата"));
// console.log(getDaysBetweenDates(null));
