"use strict";

// let flSend = false;

// try {
//   if (!flSend) {
//     flSend = true;
//     // send message on server
//   }
// } catch (error) {
//   console.log("Error sending on server");
// } finally {
//   flSend = false;
// }

// console.log(flSend);

// let err1 = new Error("Ошибка выполения кода");
// let err2 = new SyntaxError("Ошибка запятых, точек и скобок");
// let err3 = new TypeError("Ошибка. Обращение не к тому типу данных");
// let err4 = new ReferenceError(
//   "Ошибка. Данная переменная, к которой вы обращаетесь - не объявлена"
// );

// throw err1;
// throw new SyntaxError("Ошибка синтаксиса");

// function divide(a, b) {
//   if (b === 0) {
//     throw new Error("Деление на ноль");
//   }
//   return a / b;
// }

// // let res = 0;
// try {
//   res = divide(1, 2);
//   console.log(res);
// } catch (error) {
//   if (error.name == "Error") {
//     console.log(error.name);
//     console.log(error.message);
//   } else {
//     throw error;
//   }
// }
