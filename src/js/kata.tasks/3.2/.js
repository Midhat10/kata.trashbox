// function incrementCounter(counterName){

// // }

// // class ValidationError extends Error {
// //   constructor(message) {
// //     super(message);
// //     this.name = this.constructor.name;
// //   }
// // }

// // function validate(user) {
// //   if(!user.name) throw ValidationError("Нет свойства: name")
// //   if (!user.age)
// // }

// document.cookie = "какие-то данные";
// document.cookie = "username=Midhat";
// document.cookie = "age=28";

// // document.cookie = `${encodeURIComponent("date of birth")}=${encodeURIComponent(
// //   "february 4, 1996"
// // )}`;

// const setCookie = (name, value) => {
//   document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
// };

// setCookie("date of birth", "february 4, 1996");
// console.log("Cookie:", document.cookie);

// const getCookie = (name) => {
//   for (const entryStr of document.cookie.split("; ")) {
//     const [entryName, entryValue] = entryStr.split("=");

//     if (decodeURIComponent(entryName) === name) {
//       return decodeURIComponent(entryValue);
//     }
//   }
// };

// console.log("username: ", getCookie("username"));
// console.log("date of birth: ", getCookie("date of birth"));

// let res = 0;
// try {
//   // d = 2;
//   res = 5 / d;
//   console.log(res);
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
//   console.log(error.stack);
// }

// let flSend = false;
// try {
//   if (!flSend) {
//     flSend = true;
//   }
// } catch (error) {
//   console.log("Ошибка обработки запроса");
// } finally {
//   flSend = false;
// }

// console.log(flSend);

// let err1 = new Error("Ошибка выполнения");
// let err2 = new SyntaxError("Ошибка синтаксиса");
// let err3 = new TypeError("Ошибка типов данных");

// function divide(a, b) {
//   if (b == 0) {
//     throw err1;
//   }

//   return a / b;
// }

// // let res = 0;
// try {
//   res = d 7 5;
//   res = divide(1, 2);
//   console.log(res);
// } catch (error) {
//   if ((error.name = "Error")) {
//     console.log(error.name);
//     console.log(error.message);
//   } else {
//     throw error;
//   }
// }

// try ... catch

// try {
//   console.log("Start of block try");

//   console.log("End of block try");
// } catch (error) {
//   console.log("Catch haven't,because errors haven't");
// }

// try {
//   console.log("Start of block try");
//   lalala;
//   console.log("End of block try");
// } catch (error) {
//   console.log("Arrised error");
// }

// try {
//   {{{{{{{{{
// } catch (e) {
//   console.log("Engine can't understand this code, he isn't correct");
// }

// try {
//   setTimeout(function () {
//     noSuchVariable; // script will fail there
//   }, 1000);
// } catch (e) {
//   console.log("it dosn't work");
// }

// setTimeout(function () {
//   try {
//     noSuchVariable; // try..catch proccesing error!
//   } catch {
//     console.log("It had catched error");
//   }
// }, 1000);

// Object of Error;
// try {
//   lalala;
// } catch (err) {
//   console.log(err.name);
//   console.log(err.message);
//   console.log(err.stack);

//   console.log(err);
// }

// Block "catch" without variable;

// try {
// } catch {}

// Using "try..catch"
// let json = '{"name":"John", "age": 30}';

// let user = JSON.parse(json);

// console.log(user.name);
// console.log(user.age);

// let json = "{incorrect JSON}";

// try {
//   let user = JSON.parse(json);
//   console.log(user.name);
// } catch (e) {
//   console.log(
//     "Sorry, it's an error in data, we will try to get them once more"
//   );
//   console.log(e.name);
//   console.log(e.message);
// }

// Making own mistakes;
// let json = '{"age": 30}'; // data isn't full;

// try {
//   let user = JSON.parse(json);
//   console.log(user.name);
// } catch (e) {
//   console.log("it will not execute");
// }

// not full information
// let json = `{"age": 30}`;

// try {
//   df;
//   user = JSON.parse(json);

//   if (!user.name) {
//     throw new SyntaxError("Data isn't full: there is'n name");
//   }

//   console.log(user.name);
// } catch (e) {
//   console.log(e.name);
//   console.log("JSON Error: " + e.message);
// }

// let json = '{"age":30}';

// function readData() {
//   try {
//     let parsed = JSON.parse(json);
//     if (!parsed.name) throw new SyntaxError("Данные не полны: нет имени");
//     blablabla();
//   } catch (err) {
//     if (err.name === "SyntaxError") {
//       console.log("JSON Error:" + err.message);
//     } else {
//       throw err;
//     }
//   }
// }

// try {
//   readData();
// } catch (e) {
//   console.log("Extend catch: " + e);
// }

// try {
//   console.log("try");
//   if (confirm("Do we generate error?")) BAD_CODE();
// } catch (e) {
//   console.log("catch");
// } finally {
//   console.log("finally");
// }

// let json = `{ "name": "John", "age": 30 }`;

// class ValidationError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "ValidationError";
//   }
// }

// class PropertyReqieredError extends ValidationError {
//   constructor(property) {
//     super("Net svoystva: " + property);
//     this.name = "PropertyRequredError";
//     this.property = property;
//   }
// }

// function readUser(json) {
//   let user = JSON.parse(json);
//   if (!user.name) throw new PropertyReqieredError("name");
//   if (!user.age) throw new PropertyReqieredError("age");
//   return user;
// }

// try {
//   let user = readUser('{ "age": 25 }');
// } catch (e) {
//   if (e instanceof ValidationError) {
//     console.log("Neverniye dannyie: " + e.message);
//     console.log(e.name);
//     console.log(e.property);
//   } else if (e instanceof SyntaxError) {
//     console.log("JSON Error of Syntaxis: " + e.message);
//   } else {
//     throw e;
//   }
// }

// class MyError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = this.constructor.name;
//   }
// }

// class ValidationError extends MyError {}

// class PropertyReqieredError extends ValidationError {
//   constructor(property) {
//     super("Net svoistva: " + property);
//     this.property = property;
//   }
// }

// console.log(new PropertyReqieredError("fieild").name);

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
// class PropertyReqieredError extends ValidationError {
//   constructor(property) {
//     super("Net svoystva: " + property);
//     this.property = property;
//   }
// }

// function validateUser(user) {
//   if (!user.age) throw new PropertyReqieredError("age");
//   if (!user.name) throw new PropertyReqieredError("name");
// }

// function readUser(json) {
//   let user;

//   try {
//     user = JSON.parse(json);
//   } catch (e) {
//     if (e instanceof SyntaxError) {
//       throw new ReadError("Syntaxis error", e);
//     } else {
//       throw e;
//     }
//   }

//   try {
//     validateUser(user);
//   } catch (e) {
//     if (e instanceof ValidationError) {
//       throw new ReadError("Error of validation", e);
//     } else {
//       throw e;
//     }
//   }
// }

// try {
//   readUser(`{ "name": "John", "ge": 30 }`);
// } catch (e) {
//   if (e instanceof ReadError) {
//     console.log(e);
//     // console.log("dfdfdsfsd", e.cause);
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

// window.onstorage = (event) => {
//   // if (event.key != "now") return;
//   console.log(event.key + ":" + event.newValue + " at " + event.url);
//   console.log(event.storageArea);
// };

// let textArea = document.querySelector("textarea");
// textArea.textContent = "SDFsdfs";

///// localStorage по ключу "counters"
// let badJson = `{bad json}`;
// let json = `{ "name": "John", "age": 30 }`;

// function incrementCounter(counterName) {
//   try {
//     let countersParsed = JSON.parse(localStorage.getItem("counters"));

//     if (!countersParsed[counterName]) {
//       countersParsed[counterName] = 1;
//     } else {
//       countersParsed[counterName] = countersParsed[counterName] + 1;
//     }
//     localStorage.counters = JSON.stringify(countersParsed);
//     return countersParsed[counterName];
//   } catch (e) {
//     if (e instanceof SyntaxError) {
//       localStorage.clear();
//       localStorage["counters"] = undefined;
//       localStorage["counters"] = `{"${counterName}":1}`;
//       return JSON.parse(localStorage["counters"])[counterName];
//     } else {
//       throw e;
//     }
//   }
// }

/// Yeshcho odna zadacha reshena;
// const getData = (key) => "hello" + key;

// class AttemptsLimitExceeded extends Error {
//   constructor() {
//     super("Max attempts limit exceed");
//     this.name = "AttemptsLimitExceeded";
//   }
// }

// class NotFoundError extends Error {
//   constructor() {
//     super("Not found");
//     this.name = "NotFoundError";
//   }
// }

// class TemporaryError extends Error {
//   constructor() {
//     super("TemporaryError");
//     this.name = "TemporaryError";
//   }
// }

// function getRepeatableData(getData, key, maxRequestsNumber = 5) {
//   for (let i = 0; i <= maxRequestsNumber; i++) {
//     if (i === maxRequestsNumber) {
//       throw new AttemptsLimitExceeded();
//     }
//     try {
//       return getData(key);
//     } catch (e) {
//       if (e instanceof NotFoundError) {
//         throw e;
//       } else if (e instanceof TemporaryError) {
//       }
//     }
//   }
// }
// console.log(getRepeatableData(getData, "1", 3)); // 'hello1'

// class ExecutionError extends Error {
//   constructor(arg, stack) {
//     super();
//     this.arg = arg;
//     this.name = this.constructor.name;
//     this.stack = stack;
//   }

//   getArgData() {
//     return this.arg;
//   }
// }

// function applyFn(dataArr, callback) {
//   let obj = {
//     succeeded: [],
//     errors: [],
//   };
//   for (let i = 0; i < dataArr.length; i++) {
//     try {
//       try {
//         obj.succeeded.push(callback(dataArr[i]));
//       } catch (e) {
//         throw new ExecutionError(dataArr[i], e.stack);
//       }
//     } catch (e) {
//       obj.errors.push(e);
//     }
//   }
//   return obj;
// }

// // const { succeeded, errors } = applyFn([1, 2, 3], (arg) => arg + 1);
// // console.log(succeeded, errors);

// const dataArr = [
//   '{"login":"login","password":"password"}',
//   "{{}",
//   "{bad json}",
//   "{2}",
// ];
// const callback = JSON.parse;
// const { succeeded, errors } = applyFn(dataArr, callback);

// console.log(succeeded, errors);
// console.log(errors[0].getArgData());
// console.log(errors[1].getArgData());
// console.log(errors[2].getArgData());

// // console.log(JSON.parse(`{2}`));

// console.log("start");

// console.log("start2");
// function timeout2sec() {
//   console.log("timeout2sec");
// }

// window.setTimeout(function () {
//   console.log("Inside timeout, after 2 seconds");
// }, 2000);

// setTimeout(timeout2sec, 2000);

// console.log("end");

// function printNumbers(from, to) {
//   let i = from;
//   setTimeout(function run() {
//     console.log(i);
//     if (i === to) {
//       return;
//     } else {
//       i++;
//       setTimeout(run, 1000);
//     }
//   }, 1000);
// }

// function printNumbers(from, to) {
//   let i = from;
//   function go() {
//     console.log(i);
//     if (i === to) {
//       clearTimeout(timerId);
//     }
//     i++;
//   }
//   go();
//   let timerId = setInterval(go, 1000);
// }

// printNumbers(2, 5);

// function first(y) {
//   console.log(1);
//   y();
// }

// function second(a, b) {
//   console.log(a * b);
// }

// // first(second);
// second(4, 7);

// let fileSizes = {
//   testFile1: 65,
//   testFile2: 48,
// };
// let sum = 0;
// function myFunc(a) {
//   sum += a;
// }
// function cb(filename2) {
//   getFileSize(filename2, cb);
// }

// function getFileSize(filename, cb) {
//   setTimeout(() => cb(fileSizes[filename]), Math.random() * 500);
// }

// function sumFileSizes(filename1, filename2, cb) {
//   getFileSize("", step1);
//   let sum = 0;

//   function step1() {
//     sum += fileSizes[filename1];
//     getFileSize("", step2);
//   }

//   function step2() {
//     sum += fileSizes[filename2];
//     console.log(sum);
//     cb(sum);
//   }
// }

// function cb(a) {
//   return a;
// }

// console.log(sumFileSizes("testFile1", "testFile2", cb));

// Общее хранилище данных
// localStorage.setItem("id2", JSON.stringify({ name: "Alex", age: 70 }));
// localStorage.setItem("id6", JSON.stringify({ name: "Elon" }));

// let info = [{ name: "Alex", age: 70 }, { name: "Elon" }];

// const usersDb = [
//   { id: 1, name: "John", age: 25 },
//   { id: 2, name: "Jane", age: 30 },
//   { id: 3, name: "Alex", age: 35 },
//   { id: 4, name: "Sarah", age: 28 },
//   { id: 5, name: "Michael", age: 32 },
// ];

// const usersDb = [];

// const db = {
//   getUserInfo(idt, callback) {
//     setTimeout(() => {
//       let userIdToFind = idt;
//       const user = usersDb.find((user) => user.id === userIdToFind);
//       const result = { name: user.name, age: user.age };
//       callback(result);
//     }, Math.random * 200);
//   },
//   getUsersIds(callback) {
//     setTimeout(() => {
//       let keys = [];
//       callback(keys);
//     }),
//       200;
//   },
// };
// const { getUserInfo, getUsersIds } = db;

// function getUsersInfo(callback) {
//   let arr2 = [];
//   getUsersIds((keys) => {
//     let arr = keys;
//     if (keys.length === 0) {
//       return;
//     }
//     let i = 0;
//     getUserInfo(arr[i], function callback(user) {
//       arr2.push(user);
//       i++;
//       if (i < arr.length) {
//         console.log(i);
//         getUserInfo(arr[i], callback);
//       } else {
//         console.log(arr2);
//       }
//     });
//   });
// }

// getUsersInfo();

// run((auth) => {
//   getUserInfo((user) => {
//     getUserGames((userGames) => {
//       getSomething("...");
//     });
//   });
// });

// function fetchUserInfo(callback) {
//   setTimeout(() => {
//     ///fetch
//     const data = { id: 1, name: "Alex" }; // данные с сервера получаем
//     callback(data);
//   }, 1000);
// }

// function fetchUserGames(id, callback) {
//   setTimeout(() => {
//     ///fetch
//     const data = ["game1", "game2"]; // данные с сервера получаем
//     callback(data);
//   }, 1000);
// }

// function run() {
//   fetchUserInfo((userInfo) => {
//     console.log(userInfo);

//     fetchUserGames(userInfo.id, (userGames) => {
//       console.log(userGames);
//     });
//   });
// }

// run();

// function fetchUserData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       /// fetch
//       const data = { id: 1, name: "Alex" };
//       resolve(data);
//     }, 1000);
//   });
// }

// function fetchUserGames(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //fetch
//       const data = ["game1", "game2"];
//       resolve(data);
//     }, 1000);
//   });
// }

// function run() {
//   fetchUserData()
//     .then((userData) => {
//       console.log(userData);
//       return fetchUserGames(userData.id);
//     })
//     .then((userGames) => {
//       console.log(userGames);
//     })
//     .catch((message) => {
//       console.log(message);
//     })
//     .finally(() => {
//       console.log("promise zavershilsya");
//     });
// }

// run();

// function fetchGames() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // fetch
//       const gamesFromServer = "sdfsdfds";
//       // const gamesFromServer = [
//       //   { id: 1, name: "Shchek puk" },
//       //   { id: 2, name: "Mario" },
//       // ];

//       if (Array.isArray(gamesFromServer)) {
//         resolve(gamesFromServer);
//       } else {
//         reject("Что-то пошло не так");
//       }
//     }, 2000);
//   });
// }

// function renderLoading() {
//   const body = document.querySelector("body");

//   const loading = document.createElement("div");
//   loading.id = "loading";
//   loading.textContent = "Загрузка ...";

//   body.append(loading);
// }

// function renderGames(games) {
//   const body = document.querySelector("body");

//   const loading = document.querySelector("#loading");
//   loading.remove();

//   games.forEach((game) => {
//     const gameElement = document.createElement("div");
//     gameElement.innerText = `Game: ${game.name}`;
//     gameElement.className = "game-element";

//     body.append(gameElement);
//   });
// }

// renderLoading();

// fetchGames().then(
//   (games) => {
//     renderGames(games);
//   },
//   (message) => {
//     console.log(message);
//   }
// );

// function fetchVideos() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //fetch
//       const data = ["Видео1", "Видео2"];
//       console.log("данные 1 получены");
//       resolve(data);
//     }, 2000);
//   });
// }

// function fetchShorts() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //fetch
//       const data = ["шортс1", "шортс2"];
//       console.log("данные 2 получены");
//       reject("Errorrrr");
//     }, 1000);
//   });
// }

// function main() {
//   console.log("Загрузка");

//   Promise.race([fetchVideos(), fetchShorts()])
//     .then((data) => {
//       console.log("OK", data);
//     })
//     .catch((message) => {
//       console.log("Error area", message);
//     });
// }

// main();

// function fetchAllVideo(callback) {
//   setTimeout(() => {
//     const videos = [
//       { id: 1, title: "Top 10 games in 2023" },
//       { id: 2, title: "The best battle is in Warcraft 3" },
//       { id: 3, title: "Which do we feed cats" },
//     ];
//     callback(videos);
//   });
// }

// function fetchDescriptionOfThisVideo(callback) {
//   setTimeout(() => {
//     const description = {
//       id: 1,
//       title: "Top 10 games 2023",
//       hashTags: ["games", "2023"],
//       authorId: 55,
//     };
//     callback(description);
//   });
// }

// function fetchInfoAboutAuthor(callback) {
//   setTimeout(() => {
//     const author = {
//       id: 55,
//       name: "Some lessons",
//       videiIds: [1, 2, 3],
//       shortIds: [10, 15, 33],
//     };
//     callback(author);
//   });
// }

// function try1() {
//   fetchAllVideo((videos) => {
//     console.log(videos[0].id);
//     fetchDescriptionOfThisVideo((description) => {
//       console.log(description.authorId);
//       fetchInfoAboutAuthor((author) => {
//         console.log(author.shortIds[1]);
//       });
//     });
//   });
// }
// try1();

// function fetchAllVideo() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const videos = [
//         { id: 1, title: "Top 10 games in 2023" },
//         { id: 2, title: "The best battle is in Warcraft 3" },
//         { id: 3, title: "Which do we feed cats" },
//       ];
//       resolve(videos);
//     }, 1000);
//   });
// }

// function fetchDescriptionOfThisVideo(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const description = {
//         id: 1,
//         title: "Top 10 games 2023",
//         hashTags: ["games", "2023"],
//         authorId: 55,
//       };
//       resolve(description);
//     }, 1500);
//   });
// }

// function fetchInfoAboutAuthor(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const author = {
//         id: 55,
//         name: "Some lessons",
//         videiIds: [1, 2, 3],
//         shortIds: [10, 15, 33],
//       };
//       resolve(author);
//     }, 500);
//   });
// }

// function fetchShortOfTheAuthor(id) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       //fetch
//       reject("We haven't access to the short");
//     }, 500);
//   });
// }

// function run() {
//   fetchAllVideo()
//     .then((videos) => {
//       console.log(videos);
//       return fetchDescriptionOfThisVideo(videos[0].id);
//     })
//     .then((description) => {
//       console.log(description);
//       return fetchInfoAboutAuthor(description.authorId);
//     })
//     .then((author) => {
//       console.log(author);
//       return fetchShortOfTheAuthor(author.shortIds[1]);
//     })
//     .catch((message) => {
//       console.log(message);
//     })
//     .finally(() => {
//       console.log("Konets!");
//     });
// }
// run();

// function increaseSalary() {
//   return api
//     .getEmployees()
//     .then((employees) => {
//         let salarymin = Infinity;
//   let IdwithSmallSalary = null;
//   api._employees.forEach((empl) => {
//     if (empl.salary < salarymin) {
//       salarymin = empl.salary;
//       IdwithSmallSalary = empl.id;
//     }
//   });
//       let newSalary = salarymin * 1.2;
//       return api.setEmployeeSalary(IdwithSmallSalary, newSalary);
//     })
//     .then((emplWithNewSalary) => {
//       let text = `Hello, ${emplWithNewSalary.name}! Congratulations, your new salary is ${emplWithNewSalary.salary}!`;
//       return api.notifyEmployee(emplWithNewSalary.id, text);
//     })
//     .catch ((error) => {
//       return api.notifyAdmin(error);
//     })
// }

// const api = {
//   _employees: [
//     { id: 1, name: 'Alex', salary: 120000 },
//     { id: 2, name: 'Fred', salary: 110000 },
//     { id: 3, name: 'Bob', salary: 80000 },
//   ],

//   getEmployees() {
//     return new Promise((resolve) => {
//       resolve(this._employees.slice());
//     });
//   },

//   setEmployeeSalary(employeeId, newSalary) {
//     return new Promise((resolve) => {
//       this._employees = this._employees.map((employee) =>
//         employee.id !== employeeId
//           ? employee
//           : {
//             ...employee,
//             salary: newSalary,
//           }
//       );
//       resolve(this._employees.find(({ id }) => id === employeeId));
//     });
//   },

//   notifyEmployee(employeeId, text) {
//     return new Promise((resolve) => {
//       resolve(true);
//     });
//   },

//   notifyAdmin(error) {
//     return new Promise((resolve) => {
//       resolve(false);
//     });
//   },

//   setEmployees(newEmployees) {
//     return new Promise((resolve) => {
//       this._employees = newEmployees;
//       resolve();
//     });
//   },
// };

// increaseSalary();

// console.log("Request Data...");

// setTimeout(() => {
//   console.log("Preparing data...");

//   const backendData = {
//     server: "aws",
//     port: 2000,
//     status: "working",
//   };

//   setTimeout(() => {
//     backendData.modified = true;
//     console.log("Data received", backendData);
//   });
// }, 2000);

// const p = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Preparing data...");

//     const backendData = {
//       server: "aws",
//       port: 2000,
//       status: "working",
//     };
//     resolve(backendData);
//   }, 2000);
// });

// p.then((data) => {
//   const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.modified = true;
//       resolve(data);
//       // console.log("Data received", data);
//     });
//   });
// });

// const firstPromise = new Promise((resolve) =>
//   setTimeout(() => resolve(300), 300)
// );

// const secondPromise = new Promise((resolve, reject) =>
//   setTimeout(() => {
//     // resolve("Resheno");
//     reject(new Error("Ошибка!"));
//   }, 200)
// );

// const thirdPromise = new Promise((resolve) =>
//   setTimeout(() => resolve(400), 400)
// );

// function promiseRace(promises) {
//   return new Promise((resolve, reject) => {
//     for (let i = 0; i < promises.length; i++)
//       promises[i]
//         .then((res) => {
//           resolve(res);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//   })
//     .then((res) => res)
//     .catch((error) => {
//       throw error;
//     });
// }

// promiseRace([firstPromise, secondPromise, thirdPromise]);

// const firstPromise = new Promise((resolve) =>
//   setTimeout(() => resolve(300), 300)
// );

// const secondPromise = new Promise((resolve, reject) =>
//   setTimeout(() => resolve(200), 200)
// );

// const thirdPromise = new Promise((resolve) =>
//   setTimeout(() => resolve(100), 100)
// );
// const forthPromise = new Promise((resolve) =>
//   setTimeout(() => resolve(500), 500)
// );
// const fifthPromise = new Promise((resolve) =>
//   setTimeout(() => resolve(600), 600)
// );
// const sixthPromise = new Promise((resolve) =>
//   setTimeout(() => resolve(700), 700)
// );

// function promiseAll(promises) {
//   return new Promise((resolve, reject) => {
//     let arr = [];
//     let i = 0;
//     if (promises.length === 0) {
//       resolve([]);
//     }
//     promises[i]
//       .then(function haha(res) {
//         arr.push(res);
//         if (arr.length === promises.length) {
//           return resolve(arr);
//         }
//         i++;
//         return promises[i].then(haha);
//       })
//       .catch((error) => {
//         arr.push(error);
//         reject(error);
//       });
//   })
//     .then((res) => res)
//     .catch((error) => {
//       throw error;
//     });
// }

// // promiseAll([
// //   firstPromise,
// //   secondPromise,
// //   thirdPromise,
// //   forthPromise,
// //   fifthPromise,
// //   sixthPromise,
// // ]).then(console.log); // [300, 200, 100]

// promiseAll([]).then(console.log); // [300, 200, 100]

//fetch

// https://jsonplaceholder.typicode.com/posts

// const newPost = {
//   userId: 1,
//   id: 77777777777,
//   title: "Привет",
//   body: "ваоыдла",
// };

// const test = JSON.stringify(newPost);

// console.log(test);

// fetch(url)
//   .then((data) => {
//     console.log(data);
//     return data.json();
//   })
//   .then((info) => {
//     console.log(info);
//   });

// function renderWeather(data) {
//   const div = document.createElement("div");
//   div.textContent = `Температура: ${data.temperature_2m}
//   Скорость ветра: ${data.wind_speed_10m}
//   Сейчас ${data.is_daty === 0 ? "ночь" : "день"}`;

//   document.body.append(div);
// }

const url = `https://api.open-meteo.com/v1/forecast?
latitude=44.660372&
longitude=33.808392&
current=temperature_2m,wind_speed_10m,is_day`;

const URL = `https://jsonplaceholder.typicode.com/posts/`;

// fetch(url, {
// method: "POST",
// body: JSON.stringify({
//   title: "Fefsdfsdf"
// })})
//   .then((data) => {
//     return data.json();
//   })
//   .then((info) => {
//     renderWeather(info.current);
//     console.log(info.current);
//   });

// const newPost = {
//   userId: 1,
//   id: 77777777777,
//   title: "Привет",
//   body: "ваоыдла",
// };

// axios("https://jsonplaceholder.typicode.com/posts/", {
//   method: "POST",
//   data: { title: "sdfsdfds" },
// }).then((response) => {
//   console.log(response.data);
// });

// // 1. Создаём новый XMLHttpRequest-объект
// let xhr = new XMLHttpRequest();

// // 2. Настраиваем его: GET-запрос по URL /article/.../load
// xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/");

// // 3. Отсылаем запрос
// xhr.send();

// // 4. Этот код сработает после того, как мы получим ответ сервера
// xhr.onload = function () {
//   if (xhr.status != 200) {
//     // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
//     console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
//   } else {
//     // если всё прошло гладко, выводим результат
//     console.log(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
//   }
// };

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((data) => data.json())
//   .then((data) => console.log(data))
//   .catch((error) => {});

// async function getData() {
//   const data = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data2 = await data.json();
//   console.log(data2);
// }

// getData();

// async function errorTest() {

// }

// errorTest();

// const button = document.querySelector("#my__button");
// const button2 = document.querySelector("#my__button2");
// const loading = document.querySelector("#loading");

// button.addEventListener("click", () => {
//   addLoader();
//   fetch(URL)
//     .then((data) => {
//       return data.json();
//     })
//     .then((data) => console.log(data))
//     .finally(() => {
//       removeLoader();
//     });
// });

// button2.addEventListener("click", async () => {
//   addLoader();
//   const data = await fetch(URL);
//   const data2 = await data.json();
//   removeLoader();
//   console.log(data2);
// });

// function addLoader() {
//   loading.classList.add("show");
// }

// function removeLoader() {
//   loading.classList.remove("show");
// }

// async function loadJson(url) {
//   const meta = await fetch(url);
//   if (meta.status == 200) {
//     return meta.json();
//   } else {
//     throw new Error(meta.status);
//   }
// }

// loadJson("no-such-user.json").catch((error) => console.log(error));

// const delay = (ms) => {
//   return new Promise((r) => setTimeout(() => r(), ms));
// };

// delay(2000).then(() => console.log("2 second"));

// async () => {
//   let result = await Promise.all([fetch(url1), fetch(url2)]);
// };

// async function loadJson(url) {
//   const meta = await fetch(url);
//   if (meta.status == 200) {
//     let data = await meta.json();
//     return data;
//   } else {
//     throw new Error(meta.status);
//   }
// }

// loadJson("no-such-user.json") // (3)
//   .catch(console.log); // Error: 404

// class HttpError extends Error {
//   constructor(meta) {
//     super(`${meta.status} for ${meta.url}`);
//     this.name = "HttpError";
//     this.meta = meta;
//   }
// }

// async function loadJson(url) {
//   const meta = await fetch(url);
//   if (meta.status == 200) {
//     const data = await meta.json();
//     return data;
//   } else {
//     throw new HttpError(meta);
//   }
// }

// // Запрашивать логин, пока github не вернёт существующего пользователя.
// async function demoGithubUser() {
//   try {
//     let name = prompt("Введите логин?", "iliakan");
//     const user = await loadJson(`https://api.github.com/users/${name}`);
//     console.log(`Полное имя: ${user.name}.`);
//     return user;
//   } catch (err) {
//     if (err instanceof HttpError && err.meta.status == 404) {
//       alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
//     } else {
//       throw err;
//     }
//   }
// }

// demoGithubUser().catch((error) => console.log(error));

// async function wait() {
//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   return 10;
// }

// function f() {
//   return wait().then((data) => data);
//   // ...что здесь написать?
//   // чтобы вызвать wait() и дождаться результата "10" от async–функции
//   // не забывайте, здесь нельзя использовать "await"
// }

// console.log(f());

// async function increaseSalary() {
//   let succesSalary = 0;
//   let salarySumEnd = 0;
//   try {
//     let workers = await api.getEmployees();
//     let salarySum = workers.reduce((acc, { salary }) => {
//       acc += salary;
//       return acc;
//     }, 0);

//     let averageSum = +(salarySum / workers.length);
//     let newSalary = null;
//     try {
//       for (let el of workers) {
//         if (el.salary > averageSum) {
//           newSalary = el.salary * 1.1;
//         } else {
//           newSalary = el.salary * 1.2;
//         }

//         let setProtsentIncrease = await api.setEmployeeSalary(el.id, newSalary);

//         let text = `Hello, ${el.name}! Congratulations, your new salary is ${setProtsentIncrease.salary}!`;
//         let goodresult = await api.notifyEmployee(el.id, text);
//         if (goodresult) {
//           succesSalary++;
//           salarySumEnd += setProtsentIncrease.salary;
//         }
//       }
//     } catch (error) {
//       return await api.notifyAdmin(false);
//     }
//     let sendSummarySum = await api.sendBudgetToAccounting(salarySumEnd);
//     return sendSummarySum;
//   } finally {
//     return succesSalary;
//   }
// }

// const api = {
//   _employees: [
//     { id: 1, name: "Alex", salary: 120000 },
//     { id: 2, name: "Fred", salary: 110000 },
//     { id: 3, name: "Bob", salary: 80000 },
//     { id: 4, name: "Bsdf", salary: 50000 },
//   ],

//   getEmployees() {
//     return new Promise((resolve) => {
//       resolve(this._employees.slice());
//     });
//   },

//   setEmployeeSalary(employeeId, newSalary) {
//     return new Promise((resolve) => {
//       const updatedEmployees = this._employees.map((employee) =>
//         employee.id !== employeeId
//           ? employee
//           : {
//               ...employee,
//               salary: newSalary,
//             }
//       );
//       this._employees = updatedEmployees;
//       resolve(this._employees.find(({ id }) => id === employeeId));
//     });
//   },

//   notifyEmployee(employeeId, text) {
//     return new Promise((resolve) => {
//       resolve(true);
//     });
//   },

//   notifyAdmin(error) {
//     return new Promise((resolve) => {
//       resolve();
//     });
//   },

//   setEmployees(newEmployees) {
//     return new Promise((resolve) => {
//       this._employees = newEmployees;
//       resolve();
//     });
//   },

//   sendBudgetToAccounting(newBudget) {
//     return new Promise((resolve) => {
//       resolve();
//     });
//   },
// };

// async function try1() {
//   const res = await increaseSalary();
//   console.log(res, "sfsdfdssfd");
// }

// try1();

// const firstPromise = () =>
//   new Promise((resolve) => setTimeout(() => resolve(300), 300));

// const secondPromise = () =>
//   new Promise((resolve) => setTimeout(() => resolve(200), 200));

// const thirdPromise = () =>
//   new Promise((resolve) => setTimeout(() => resolve(100), 100));
// const forthPromise = () =>
//   new Promise((resolve) => setTimeout(() => resolve(400), 400));
// const fifthPromise = () =>
//   new Promise((resolve) => setTimeout(() => resolve(500), 500));
// const sixPromise = () =>
//   new Promise((resolve) => setTimeout(() => resolve(600), 600));

// async function promisesInSeries(asyncFns) {
//   let el = await asyncFns[0]();
//   let i = 1;
//   async function go(variable) {
//     console.log(i);
//     let el2 = await asyncFns[i](variable);
//     console.log(el2);
//     i++;
//     if (i === asyncFns.length) {
//       return;
//     }
//     return go(el2);
//   }
//   go(el);
// }

// async function promisesInSeries(asyncFns) {
//   let el = await asyncFns[0]();
//   let el2 = await asyncFns[1](el);
//   let i = 1;
//   async function go(variable) {
//     let el2 = await asyncFns[i](variable);
//     if (i === 1) {
//       i = 2;
//       return variable;
//     }
//     console.log(i, "sdfsdf", i);
//     i++;
//     if (i === asyncFns.length) {
//       return;
//     }
//     go(el2);
//     return el2;
//   }
//   go(el);
//   go(el2);
// }

// async function promisesInSeries(asyncFns) {
//   let array = [];
//   for (let i = 0; i < asyncFns.length; i++) {
//     if (i === 0) {
//       array.push(await asyncFns[0]());
//     } else if (i === 1) {
//       el = await asyncFns[i](await asyncFns[0]());
//       array.push(el);
//     } else {
//       el = await asyncFns[i](el);
//       array.push(el);
//     }
//   }
//   return array;
// }

// async function promisesInSeries(asyncFns) {
//   let array = [];
//   for (let i = 1; i < asyncFns.length; i++) {
//     if (i === 0) {
//       array.push(await asyncFns[0]());
//     } else if (i === 1) {
//       el = await asyncFns[i](await asyncFns[0]());
//       array.push(el);
//     } else {
//       el = await asyncFns[i](el);
//       array.push(el);
//     }
//   }
//   return console.log(array[asyncFns.length - 2]);
// }

// promisesInSeries([
//   firstPromise,
//   secondPromise,
//   thirdPromise,
//   forthPromise,
//   fifthPromise,
//   sixPromise,
// ]);

// async function increaseSalary() {
//   let countSuccedEmployee = 0;
//   let countSuccedSalarySum = 0;
//   let newEmployees = [];
//   try {
//     let employees = await api.getEmployees();
//     let averageSalary =
//       employees.reduce((acc, { salary }) => (acc += salary), 0) /
//       employees.length;
//     for (let i = 0; i < employees.length; i++) {
//       if (employees[i].salary > averageSalary) {
//         try {
//           let s = await api.setEmployeeSalary(
//             employees[i].id,
//             employees[i].salary * 1.1
//           );
//           let text = `Hello, ${
//             employees[i].name
//           }! Congratulations, your new salary is ${employees[i].salary * 1.1}!`;
//           await api.notifyEmployee(employees[i].id, text);
//           countSuccedEmployee++;
//           countSuccedSalarySum += employees[i].salary * 1.1;
//           newEmployees.push(s);
//         } catch (error) {
//           await api.notifyAdmin(error);
//         }
//       } else {
//         try {
//           let d = await api.setEmployeeSalary(
//             employees[i].id,
//             employees[i].salary * 1.2
//           );
//           let text = `Hello, ${
//             employees[i].name
//           }! Congratulations, your new salary is ${employees[i].salary * 1.2}!`;
//           await api.notifyEmployee(employees[i].id, text);
//           countSuccedEmployee++;
//           countSuccedSalarySum += employees[i].salary * 1.2;
//           newEmployees.push(d);
//         } catch (error) {
//           await api.notifyAdmin(error);
//         }
//       }
//     }
//     let setNewEmployees = await api.setEmployees(newEmployees);
//     let control = await api.getEmployees();
//     await api.sendBudgetToAccounting(countSuccedSalarySum);
//   } catch {
//   } finally {
//     return countSuccedEmployee;
//   }
// }

// const api = {
//   _employees: [
//     { id: 1, name: "Alex", salary: 120000 },
//     { id: 2, name: "Fred", salary: 110000 },
//     { id: 3, name: "Bob", salary: 80000 },
//   ],

//   getEmployees() {
//     return new Promise((resolve) => {
//       resolve(this._employees.slice());
//     });
//   },

//   setEmployeeSalary(employeeId, newSalary) {
//     return new Promise((resolve) => {
//       const updatedEmployees = this._employees.map((employee) =>
//         employee.id !== employeeId
//           ? employee
//           : {
//               ...employee,
//               salary: newSalary,
//             }
//       );
//       this._employees = updatedEmployees;
//       resolve(this._employees.find(({ id }) => id === employeeId));
//     });
//   },

//   notifyEmployee(employeeId, text) {
//     return new Promise((resolve) => {
//       resolve(true);
//     });
//   },

//   notifyAdmin(error) {
//     return new Promise((resolve) => {
//       resolve();
//     });
//   },

//   setEmployees(newEmployees) {
//     return new Promise((resolve) => {
//       this._employees = newEmployees;
//       resolve();
//     });
//   },

//   sendBudgetToAccounting(newBudget) {
//     return new Promise((resolve) => {
//       resolve();
//     });
//   },
// };

// increaseSalary();

// let table = document.body.firstElementChild;
// console.log(table.firstElementChild, "sdfsdf");
// let tbody = table.firstElementChild;
// let tr1 = tbody.firstElementChild;
// for (let i = 0; i < tbody.rows.length; i++) {
//   for (let j = 0; j < tr1.length; j++) {
//     console.log(j);
//     if (i === j) {
//       //   tr1[j].style.backgroundColor = "red";
//     }
//   }
// }
