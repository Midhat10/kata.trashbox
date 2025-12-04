// const person = Object.create(
//   {
//     calculateAge() {
//       console.log("Age", new Date().getFullYear() - this.birthYear);
//     },
//   },
//   {
//     name: {
//       value: "Midhat",
//       writable: true,
//       enumerable: true,
//       configurable: true,
//     },
//     birthYear: {
//       value: 1997,
//       writable: true,
//       enumerable: true,
//       configurable: true,
//     },
//     age: {
//       get() {
//         return new Date().getFullYear() - this.birthYear;
//       },
//       set(value) {
//         document.body.style.background = "red";
//         console.log("Set age", value);
//       },
//     },
//   }
// );

// for (let key in person) {
//   if (Object.hasOwn(person, key)) console.log("key", key, person[key]);
// }

// console.log(Object.getOwnPropertyDescriptors(person));

// // console.log((person.age = 100));
// console.log(person);

// let animal = {
//   eats: true,
// };

// создаём новый объект с прототипом animal
// let rabbit = Object.create(animal);

// console.log(rabbit);
// console.log(rabbit.eats); // true

// console.log(Object.getPrototypeOf(rabbit)); // получаем прототип объекта rabbit

// Object.setPrototypeOf(rabbit, {}); // заменяем прототип объекта rabbit на {}
// console.log(rabbit);
// Простейший объект;
// let obj = {};

// let key = prompt("What's the key?", "__proto__");
// console.log(key);
// obj[key] = "dsfsf";

// console.log(obj[key]); // [object Object], не "some value"!
// console.log(obj);

// let obj = Object.create(null);

// let key = prompt("What's the key?", "__proto__");
// obj[key] = "some value";

// console.log(obj[key]); // "some value"
// console.log(obj);

// let obj = Object.create(null);

// alert(obj); // Ошибка (no toString)

// Добавьте toString в словарь

// let dictionary = Object.create(null);

// // ваш код, который добавляет метод dictionary.toString
// dictionary.toString = function () {
//   // return Reflect.ownKeys(dictionary).slice(1).join();
//   return Object.keys(this).join();
// };

// Object.defineProperty(dictionary, "toString", {
//   enumerable: false,
// });

// // добавляем немного данных
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// // // только apple и __proto__ выведены в цикле
// for (let key in dictionary) {
//   console.log(key); // "apple", затем "__proto__"
// }
// console.log(dictionary.toString());
// // // ваш метод toString в действии
// alert(dictionary); // "apple,__proto__"

///////////////////
// Object Create
// const A = {
//   objectName: "Object A",
//   getObjectName: function () {
//     return `This is ${this.objectName}!`;
//   },
// };

// Object.create = function (proto, propertiesObject) {
//   let newObj = {};
//   Object.setPrototypeOf(newObj, proto);
//   if (propertiesObject !== undefined) {
//     Object.defineProperties(newObj, propertiesObject);
//   }
//   return newObj;
// };

// const B = Object.create(A, {
//   objectName: {
//     value: "Object B",
//   },
// });

// console.log(A.getObjectName()); // This is Object A!
// console.log(B.getObjectName()); // This is Object B!

// console.log(A.hasOwnProperty("getObjectName")); // true
// console.log(A.hasOwnProperty("objectName")); // true

// console.log(B.hasOwnProperty("getObjectName")); // false
// console.log(B.hasOwnProperty("objectName")); // true

// console.log(Object.getPrototypeOf(Object.create()));
// console.log(Object.getPrototypeOf(B) === A);
// console.log(Object.is(A, B), "sdfsfd");
