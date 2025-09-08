// Задачи по Мапу (заражаемый массив) и по Сету(множество)
// 1 Задача. Фильтрация уникальных элементов массива

// function unique(arr) {
//   const set = new Set(arr);
//   return [...set];
// }

// let values = [
//   "Glory",
//   "Jesus",
//   "Glory",
//   "Jesus",
//   "Jesus",
//   "Jesus",
//   "Glory",
//   "Glory",
//   ":-O",
// ];

// console.log(unique(values)); // Glory,Jesus,:-O

// 2. Отфильтруйте анаграммы

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function aclean(arr) {
//   const map = new Map();
//   for (let word of arr) {
//     let sorted = word.toLowerCase().split("").sort().join("");
//     map.set(sorted, word);
//   }
//   return [...map.values()];
// }

// console.log(aclean(arr)); // "nap,teachers,ear" или "PAN,cheaters,era"

// 3. Перебираемые ключи

// let map = new Map();

// map.set("name", "John");

// let keys = [...map.keys()];

// // Error: keys.push is not a function
// // Ошибка: keys.push -- это не функция
// keys.push("more");
// console.log(keys);
