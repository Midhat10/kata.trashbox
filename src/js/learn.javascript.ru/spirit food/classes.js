// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     console.log(this.name);
//   }
// }

// console.log(typeof User);

// let user = new User("Midhat");
// console.log(user);

// function User(name) {
//   let x = {};
//   x.name = name;
//   x.isAdmin = false;
//   return x;
// }

// function User(name) {
//   // добавляет свойства к this
//   this.name = name;
//   this.isAdmin = false;
// }

// let user = new User("Jack");

// console.log(user.name); // Jack
// console.log(user.isAdmin); // false

// function Rabbit(name) {
//   this.name = name;
// }

// Rabbit.prototype.eats = true;

// let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
// let rabbit2 = new rabbit.constructor("Black Rabbit");

// console.log(rabbit);
// console.log(rabbit2);

// alert(rabbit.eats); // true

// function Rabbit(name) {
//   this.name = name;
//   console.log(name);
// }

// let rabbit = new Rabbit("White Rabbit");

// let rabbit2 = new rabbit.constructor("Black Rabbit");
// console.log(rabbit2.constructor);

// let animal = {
//   eats: true,
// };

// let rabbit = {
//   jumps: true,
// };

// rabbit.__proto__ = animal;
// // Object.setPrototypeOf(rabbit, animal);

// console.log(rabbit);

// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach = food;
//   },
// };

// let speedy = {
//   __proto__: hamster,
// };

// let lazy = {
//   __proto__: hamster,
// };

// // Этот хомяк нашёл еду
// speedy.eat("apple");
// console.log(speedy.stomach); // apple

// // У этого хомяка тоже есть еда. Почему? Исправьте
// console.log(lazy.stomach); // apple
///////////////////////
// Добавить функциям метод "f.defer(ms)"

// Function.prototype.defer = function (ms) {
//   setTimeout(this, ms);
// };

// function f() {
//   console.log("Hello!");
// }

// f.defer(1000);
// f.defer(2000);

// Добавьте функциям декорирующий метод "defer()"
// Function.prototype.defer = function (ms) {
//   let mediumThis = this;
//   return function (...args) {
//     setTimeout(() => {
//       return mediumThis(...args);
//     }, ms);
//   };
// };

// Function.prototype.defer = function (ms) {
//   let mediumThis = this;
//   console.log(this);
//   return function (...args) {
//     setTimeout(() => {
//       console.log(this);
//       return mediumThis.apply(this, args);
//     }, ms);
//   };
// };

// function f(a, b) {
//   console.log(a + b);
// }

// f.defer(1000)(1, 2); // выведет 3 через 1 секунду

// function Rabbit(name) {
//   this.name = name;
// }
// Rabbit.prototype.sayHi = function () {
//   alert(this.name);
// };

// let rabbit = new Rabbit("Rabbit");

// console.log(Rabbit.prototype);

// class User {
//   constructor(name) {
//     // вызывает сеттер
//     console.log("sdfsdf");
//     this.name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     if (value.length < 4) {
//       console.log("Имя слишком короткое.");
//       return;
//     }
//     this._name = value;
//   }
// }

// let user = new User("Иван");
// console.log(user.name); // Иван

// user = new User(""); // Имя слишком короткое.
