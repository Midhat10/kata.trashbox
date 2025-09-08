// Task1

// let hamster = {
//   eat(food) {
//     this.stomach.push(food);
//   },
// };

// let speedy = {
//   stomach: [],
//   __proto__: hamster,
// };

// let lazy = {
//   stomach: [],
//   __proto__: hamster,
// };

// // Этот хомяк нашёл еду
// speedy.eat("apple");
// console.log(speedy.stomach); // apple

// // У этого хомяка тоже есть еда. Почему? Исправьте
// console.log(lazy.stomach); // apple

// let animal = {
//   eats: true,
// };

// function Rabbit(name) {
//   this.name = name;
// }

// Rabbit.prototype = animal;

// let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

// console.log(rabbit.eats); // true
// console.log(rabbit);

// function Rabbit() {}
// // по умолчанию:
// // Rabbit.prototype = { constructor: Rabbit }

// console.log(Rabbit.prototype.constructor == Rabbit); // true

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true,
// };

// let rabbit = new Rabbit();

// delete Rabbit.prototype.eats;

// console.log(rabbit.eats); // ?
