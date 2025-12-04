// let json = "{ некорректный JSON }";

// try {
//   let user = JSON.parse(json); // <-- тут возникает ошибка...
//   console.log(user.name); // не сработает
// } catch (e) {
//   // ...выполнение прыгает сюда
//   console.log("Извините, в данных ошибка, мы попробуем получить их ещё раз.");
//   console.log(e.name);
//   console.log(e.message);
// }

// try {
//   JSON.parse("{ некорректный json o_O }");
// } catch (e) {
//   console.log(e.name); // SyntaxError
//   console.log(e.message); // Expected property name or '}' in JSON at position 2 (line 1 column 3)
// }

// let json = '{ "age": 30 }'; // данные неполны

// try {
//   let user = JSON.parse(json); // <-- выполнится без ошибок

//   if (!user.name) {
//     throw new SyntaxError("Данные неполны: нет имени"); // (*)
//   }

//   console.log(user.name);
// } catch (e) {
//   console.log("JSON Error: " + e.message); // JSON Error: Данные неполны: нет имени
// }

// let json = '{ "age": 30 }'; // данные неполны

// try {
//   user = JSON.parse(json); // <-- забыл добавить "let" перед user
//   console.log("sdfds");
//   // ...
// } catch (err) {
//   console.log("JSON Error: " + err); // JSON Error: ReferenceError: user is not defined
//   // (не JSON ошибка на самом деле)
// }

// let json = '{ "age": 30 }'; // данные неполны
// try {
//   let user = JSON.parse(json);

//   if (!user.name) {
//     throw new SyntaxError("Данные неполны: нет имени");
//   }

//   blabla(); // неожиданная ошибка

//   console.log(user.name);
// } catch (e) {
//   if (e.name == "SyntaxError") {
//     console.log("JSON Error: " + e.message);
//   } else {
//     throw e; // проброс (*)
//   }
// }

// function readData() {
//   let json = '{ "age": 30 }';

//   try {
//     // ...
//     blabla(); // ошибка!
//   } catch (e) {
//     // ...
//     if (e.name != "SyntaxError") {
//       throw e; // проброс исключения (не знаю как это обработать)
//     }
//   }
// }

// try {
//   readData();
// } catch (e) {
//   console.log("Внешний catch поймал: " + e); // поймал!
// }

// window.onerror = function (message, url, line, col, error) {
//   console.log(`${message}\n В ${line}:${col} на ${url}`);
//   console.log(error);
// };

// function readData() {
//   badFunc(); // Ой, что-то пошло не так!
// }

// readData();

// let json = `{ "name": "John", "age": 30 }`;
// class ValidationError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "ValidationError";
//   }
// }

// class PropertyRequiredError extends ValidationError {
//   constructor(property) {
//     super("Нет свойства: " + property);
//     this.name = "PropertyRequiredError";
//     this.property = property;
//   }
// }

// function readUser(json) {
//   let user = JSON.parse(json);
//   if (!user.name) throw new PropertyRequiredError("name");
//   if (!user.age) throw new PropertyRequiredError("age");
//   return user;
// }

// try {
//   let user = readUser('{ "age": 25 }');
// } catch (err) {
//   if (err instanceof ValidationError) {
//     console.log("Некорректные данные: " + err.message); // Некорректные данные: Нет поля: name
//     console.log(err.name);
//     console.log(err.property);
//   } else if (err instanceof SyntaxError) {
//     // (*)
//     console.log("JSON Ошибка Синтаксиса: " + err.message);
//   } else {
//     throw err; // неизвестная ошибка, пробросить исключение (**)
//   }
// }

// class MyError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = this.constructor.name;
//   }
// }

// class ValidationError extends MyError {}

// class PropertyRequiredError extends ValidationError {
//   constructor(property) {
//     super("Нет свойства" + property);
//     this.property = property;
//   }
// }

// console.log(new PropertyRequiredError("field").name);

// class ReadError extends Error {
//   constructor(message, cause) {
//     super(message);
//     this.cause = cause;
//     this.name = this.constructor.name;
//   }
// }

// class ValidationError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = this.constructor.name;
//   }
// }

// class PropertyRequiredError extends ValidationError {
//   constructor(property) {
//     super("Нет свойства: " + property);
//     this.property = property;
//   }
// }

// function validateUser(user) {
//   if (!user.age) throw new PropertyRequiredError("age");
//   if (!user.name) throw new PropertyRequiredError("name");
// }

// function readUser(json) {
//   let user;

//   try {
//     user = JSON.parse(json);
//   } catch (err) {
//     if (err instanceof SyntaxError) {
//       throw new ReadError("Синтаксическая ошибка", err);
//     } else {
//       throw err;
//     }
//   }

//   try {
//     validateUser(user);
//   } catch (err) {
//     if (err instanceof ValidationError) {
//       throw new ReadError("Ошибка валидации", err);
//     } else {
//       throw err;
//     }
//   }
// }

// try {
//   readUser("{bad json}");
// } catch (e) {
//   if (e instanceof ReadError) {
//     console.log(e);
//     console.log("Исходная ошибка " + e.cause);
//   } else {
//     throw e;
//   }
// }

// class FormatError extends SyntaxError {
//   constructor(message) {
//     super(message);
//     this.name = this.constructor.name;
//   }
// }

// let err = new FormatError("ошибка форматирования");

// console.log(err.message); // ошибка форматирования
// console.log(err.name); // FormatError
// console.log(err.stack); // stack

// console.log(err instanceof FormatError); // true
// console.log(err instanceof SyntaxError); // true (потому что наследует от SyntaxError)
