// Learn js Задачи
// Две функции - один объектж
// let obj = {};
// function A(name, age) {
//   this.name = name;
//   this.age = age;
//   return obj;
// }
// function B(name, age) {
//   this.name = name;
//   this.age = age;
//   return obj;
// }

// let a = new A();
// let b = new B();

// console.log(a == b); // true
// console.log(a);
// console.log(b);

// Создать калькулятор при помощи конструктора

// function Calculator() {
//   this.read = function () {
//     this.a = +prompt("Напишите значение первого числа");
//     this.b = +prompt("Напишите значение второго числа");
//   };
//   this.sum = function () {
//     return this.a + this.b;
//   };
//   this.mul = function () {
//     return this.a * this.b;
//   };
// }

// let calculator = new Calculator();
// calculator.read();

// console.log("Sum= " + calculator.sum());
// console.log("Mul= " + calculator.mul());

// Создайте new Accumulator

// const Accumulator = function (startingValue) {
//   this.value = +startingValue;
//   this.read = function () {
//     this.value += +prompt("Put a number", 0);
//   };
// };

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
// accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

// console.log(accumulator.value); // выведет сумму этих значений
