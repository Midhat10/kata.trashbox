// Методы объектов - 20 видео.
// let obj1 = {
//   name: "Midhat",
//   info: {
//     skills: ["html,css"],
//   },
// };

// let obj2 = {
//   name: "ivan",
//   age: 20,
// };

// let newObj = Object.assign({}, obj2, obj1);
// newObj = Object.assign({}, obj1);

// newObj = JSON.parse(JSON.stringify(obj1));
// console.log(newObj.info === obj1.info);

// let keys = Object.keys(obj2);
// console.log(keys);
// let values = Object.values(obj2);
// console.log(values);

// let entries = Object.entries(obj2);
// console.log(entries);

// let fromEntries = Object.fromEntries(entries);
// console.log(fromEntries);

// Тема 2.1.4 Всё о Спреде и Ресте.

// const citiesRussia = ["Moscow", "Saint-Petersburg", "Kazan", "Novosibirsk"];
// const citiesEurope = ["Berlin", "Praga", "Parizh"];
// // const numbers = [1, 2, 6, 3, 34, 30];

// const citiesRussiaWithPopulation = {
//   Moscow: 20,
//   SainPetersburg: 8,
//   Kazan: 5,
//   Novosibirsk: 3,
// };

// const citiesEuropeWithPopulation = {
//   Moscow: 26,
//   Berlin: 10,
//   Praga: 3,
//   Parizh: 2,
// };

/// Spread
// console.log(...citiesRussia);
// console.log(...citiesEurope);

// // const allCities = [...citiesEurope, "Washington", ...citiesRussia];
// const allCities = citiesEurope.concat(citiesRussia);
// console.log(allCities);
// console.log(...numbers);
// console.log(citiesRussiaWithPopulation);
// console.log({ ...citiesRussiaWithPopulation });
// console.log({ ...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation });

// Practice

// console.log(Math.max(1, 2, 6, 3, 34, 30));
// console.log(Math.max(...numbers));
// console.log(Math.max.apply(null, numbers)); // раньше

// const divs = document.querySelectorAll("div");
// const nodes = [...divs];
// console.log(divs, Array.isArray(divs));
// console.log(nodes, Array.isArray(nodes));

/// Rest

// function sum(a, b, ...rest /* тут рест */) {
//   return a + b + rest.reduce((acc, item) => acc + item, 0);
// }

// const numbers = [1, 2, 3, 4, 5];

// console.log(sum(...numbers));

// const a = numbers[0];
// const b = numbers[1];

// const [a, b, ...rest] = numbers;
// console.log(a, b, rest);

// const person = {
//   name: "Midhat",
//   age: 28,
//   city: "Tankovoe",
//   country: "Russia",
// };

// const { name, age, ...rest } = person;

// console.log(name, age, rest);

// Урок 16. Всё о деструктуризации в JS.

// function calcValues(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }

// const [sum, sub = "Вычитания нет", mult, ...other] = calcValues(42, 10);
// // const sum = result[0];
// // const minus = result[1];

// console.log(sum, mult, other, sub);

// // object;

// const person = {
//   name: "Midhat",
//   age: 20,
//   address: {
//     country: "Russia",
//     city: "Moscow",
//   },
// };
//  const name = person.name;
// const {
//   name: firstName = "Без имени",
//   age,
//   car = "Car haven't",
//   address: { country: goverment, city: homeTown },
// } = person;

// const { name, age, ...rest } = person;

// console.log(name, age, rest);

// function logPerson({ name, age }) {
//   console.log(name + " " + age);
// }

// logPerson(person);

// Map

// [
//   ["Hi", "Привет"],
//   [42, "Ответ на главный вопрос жизни, вселенной и всего такого"],
//   [true, false],
//   [{}, "Объект"],
//   [function () {}, "Functziya"],
// ]

// const map = new Map();

// map
//   .set("HTML", "HyperText Markup Language")
//   .set("CSS", "Cascade Style Sheets")
//   .set("JS", "JavaScript");

// map.forEach((value, key, map) => console.log(value, key, map));

// Set

// const set = new Set();

// set.add("button").add("active");

// set.forEach((item, item2, set) => console.log(item, item2, set));

// let set = new Set();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// // считаем гостей, некоторые приходят несколько раз
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);

// // set хранит только 3 уникальных значения
// console.log(set); // 3

// for (let user of set) {
//   console.log(user.name); // John (потом Pete и Mary)
// }

// Урок 19. Дата.

// let birthday = new Date("June 21 1997");
// let start = Date.now();
// console.log(start);
// -----
// const data = new Date(2012, 1, 20, 3, 12);
// console.log(data);
// let date = new Date(2012, 0, 3); // 3 января 2012 года
