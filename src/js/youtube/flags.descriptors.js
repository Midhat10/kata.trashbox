// Флаги и дескрипторы свойств

// const user = {
//   name: "Vitaliy",
//   age: 30,
//   city: "sdfsfd",
// };

// Object.ex; // dsfsdf

// user.country = "Russia";
// delete user.age;

// // Object.defineProperties(user, {
// //   name: {
// //     writable: false, // запрещаем изменять
// //     enumerable: false, // запрещаем перечислять в циклах
// //     configurable: false, // запрещаем удалять
// //   },
// //   age: {
// //     writable: false, // запрещаем изменять
// //     enumerable: false, // запрещаем перечислять в циклах
// //     configurable: false, // запрещаем удалять
// //   },
// // });

// console.log(user);
// console.log(Object.isExtensible(user));

// // user.name = "Mishat";

// // console.log(user);

// // for (let key in user) {
// //   console.log(user[key]);
// // }

// // delete user.name;
// // console.log(user);

//////////////////////////////////
// Геттеры и сеттеры

// const user = {
//   name: "Vitaliy",
//   secondName: "Eremenko",
//   age: 30,
//   // get fullName() {
//   //   return this.name + this.secondName;
//   // },
//   set fullName(value) {
//     [this.name, this.secondName] = value;
//   },
// };

// user.fullName = ["Vasiliy", "Pupkin"];

// console.log(user);
