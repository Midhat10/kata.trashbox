// let timeId = window.setInterval(printHello, 1000, "Nash text");
// window.setTimeout(() => {
//   printHello("Paramet");
// }, 2000);
// window.clearTimeout(3);

// const customSetInterval = (func, interval, ...params) => {
//   setTimeout(() => {
//     func(...params);
//     customSetInterval(func, interval, ...params);
//   }, interval);
// };

// customSetInterval(printHello, 1000, "Nash text");

// Вывод каждую секунду
// (function printNumbers(from, to) {
//   let number = from;
//   const timeId = setInterval(() => {
//     console.log(number);
//     if (number === to) {
//       clearInterval(timeId);
//     }
//     number++;
//   }, 1000);
// })(2, 6);

// (function printNumbers(from, to) {
//   let number = from;
//   let timerId = setTimeout(function tick() {
//     console.log(number);
//     if (number === to) {
//       setTimeout(() => clearInterval(timerId));
//     }
//     number++;
//     timerId = setTimeout(tick, 1000);
//   }, 1000);
// })(2, 5);
