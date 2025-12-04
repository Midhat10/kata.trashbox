// let counter = 0;
// const fn = () => {
//   counter++;
// };

// const debouncedFn = debounce(fn, 200);
// debouncedFn(); // первый вызов
// setTimeout(debouncedFn, 100); // вызов через 100 мс после последнего вызова
// // первый вызов был заблокирован, второй ожидает окончания таймера
// setTimeout(debouncedFn, 200); // вызов через 100 мс после последнего вызова
// // второй вызов был заблокирован, третий ожидает окончания таймера
// setTimeout(debouncedFn, 300); // ...
// setTimeout(debouncedFn, 400); // после этого вызова не следует других вызовов
// // только этот вызов сработает, т.к. после него прошло 200 мс и других вызовов не было
// console.log(counter); // 1

// console.log(Array.from(titles));
// console.log(Array.prototype.slice.call(titles));

// let table = document.body.firstElementChild;
// let tbody = table.firstElementChild;
// let tr1 = tbody.firstElementChild;
// for (let i = 0; i < tbody.rows.length; i++) {
//   for (let j = 0; j < tr1.children.length; j++) {
//     if (i === j) {
//       tbody.children[i].children[j].style.backgroundColor = "red";
//     }
//   }
// }

// let counter = 0;
// const fn = () => {
//   counter++;
//   console.log("object");
// };

// function throttle(fn, throttleTime) {
//   console.log("A");
//   setTimeout(fn, throttleTime);
//   // runWhileLoopForNSeconds(throttleTime);
//   console.log("C");
// }

// function runWhileLoopForNSeconds(ms) {
//   let start = Date.now(),
//     now = start;

//   while (now - start < ms) {
//     now = Date.now();
//   }
// }

// const throttledFn = throttle(fn, 500); // функция может быть вызвана не чаще, чем раз в 500 мс

// const intervalId = setInterval(throttledFn, 100);
// setTimeout(() => clearInterval(intervalId), 1000); // удаляем интервал через 10 вызовов

// console.log(counter); // 3
// function fn() {
//   // let start = Date.now(),
//   //   now = start;

//   // while (now - start < 500) {
//   //   now = Date.now();
//   // }
//   return console.log("Hello world");
// }
// fn();

// function throttle(f, throttleTime) {
//   let count = 0;
//   return async function () {
//     let result = f.apply(this, arguments);
//     console.log(counter);
//     if (count === 0) {
//       count++;
//       return result;
//     }

//     return result;
//   };
// }

// let counter = 0;
// const fn = () => {
//   counter++;
// };

// function throttle(f, ms) {
//   let count = 0;
//   return function () {
//     let result = f.apply(this, arguments);
//     console.log(counter);
//     if (count === 0) {
//       count++;
//       return result;
//     }
//     let start = Date.now(),
//       now = start;
//     while (now - start < ms) {
//       now = Date.now();
//     }
//     return result;
//   };
// }

// const throttledFn = throttle(fn, 500);
// const intervalId = setInterval(throttledFn, 100);
// setTimeout(() => clearInterval(intervalId), 1000);

// let lis = document.getElementsByTagName("li");
// for (let el of lis) {
//   let vari = el.firstChild.data;
//   console.log(vari.trim() + ":" + el.getElementsByTagName("li").length);
// }
// const div = document.querySelector("div");
// const title = document.querySelector("h1");
// // title.innerHTML = "<span>text</span>";
// // title.textContent = "<span>new text</span>";
// // // title.appendChild("<span>append</span>");
// // title.insertAdjacentHTML("beforebegin", "<h2>title h2</h2>");

// // title.innerHTML += "<span> new text</span>";
// // const span = title.querySelector("span");
// // console.log(span.textContent);
// // // title.innerHTML += "<span> new text2 </span>";
// // span.textContent = "sdfsdfsf";
// // console.dirxml(span.textContent);

// const span = document.createElement("span");
// span.textContent = "span created by createElement";
// span.classList.add("myClass");

// title.appendChild(span);

// div.appendChild(span);

// const fragment = document.createDocumentFragment();
// const colors = ["black", "yellow", "orange"];
// colors.forEach((color) => {
//   const item = document.createElement("div");
//   item.classList.add(`bg-${color}`);
//   item.style.background = color;
//   item.textContent = color;
//   fragment.appendChild(item);
// });

// document.body.appendChild(fragment);

// title.remove()

// const textNode = document.createTextNode("Midhattttt");
// console.log(textNode);

// const div = document.createElement("div");
// div.className = "alert";
// div.innerHTML =
//   "<strong>Vsem privet!</strong> You have read this important message";

// document.body.append(div);
// const h1 = document.getElementById("h1");
// const ol = document.getElementById("ol");

// h1.before("before");
// h1.after("after");
// // h1.insertAdjacentText("beforeend", " insert ");
// ol.insertAdjacentHTML("beforebegin", "<p>Привет</p>");
// ol.insertAdjacentHTML("afterbegin", "<p>Привет, перед</p>");
// ol.insertAdjacentHTML("beforeend", "<p>Пока, после</p>");
// ol.insertAdjacentHTML("afterend", "<p>Пока</p>");
// const ul = document.getElementById("ul");
// function getListContent() {
//   let fragment = new DocumentFragment();

//   for (let i = 1; i <= 3; i++) {
//     let li = document.createElement("li");
//     li.insertAdjacentText("beforeend", i);
//     fragment.append(li);
//   }

//   return fragment;
// }

// ul.append(getListContent()); // (*)

// document.writeln("<article>Helloworld</article>");
// setTimeout(() => document.write("<h3>sdfsdfsdfdsfsd</h3>"), 1000);

// function interface() {
//   // let fragment = document.createDocumentFragment();
//   let ul = document.createElement("ul");
//   document.body.append(ul);

//   while (true) {
//     let data = prompt("Введите текст для элемента списка", "");

//     if (!data) {
//       break;
//     }

//     let li = document.createElement("li");
//     li.textContent = data;
//     ul.append(li);
//   }
//   return ul;
// }
// interface();
// let data = {
//   Рыбы: {
//     форель: {},
//     лосось: {},
//   },

//   Деревья: {
//     Огромные: {
//       секвойя: {},
//       дуб: {},
//     },
//     Цветковые: {
//       яблоня: {},
//       магнолия: {},
//     },
//   },
// };

// data2 = {};

// console.log(Object.keys(data), Object.values(data));
// let count = 0;
// for (let el in data) {
//   console.log(el, data);
//   count++;
// }
// console.log(count);
// let counter = 0;
// for (let el in data2) {
//   console.log(el);
//   counter++;
// }

// console.log(counter);
// let container = document.getElementById("container");
// function createTree(where,object) {
//     if (object.firstChild) {
//         let ul = document.createElement("ul");
//         for (let object)
//     }
//     where.append();
// }
// createTree(container, data); // создаёт дерево в контейнере

let button = document.querySelector("button");
// console.log(button);
const link = document.querySelector("a");
// button.onclick = function () {
//   console.log("click");
// };

// button.onclick = function () {
//   console.log("click 2");
// };

// button.addEventListener("click", function (event) {
//   console.log(event);
// });

// button.addEventListener("click", (e) => {
//   console.log(e);
//   console.log(this);
// });

// function clickHandler(e) {
//   e.preventDefault();
//   console.log("hello world");
//   console.log(this);
// }
// link.addEventListener("click", clickHandler);

// setTimeout(function () {
//   link.removeEventListener("click", clickHandler);
//   console.log("good by");
// }, 3000);

// const container = document.querySelector(".container");

// button.addEventListener("click", (e) => {
//   const div = document.createElement("div");
//   const nestedBtn = document.createElement("button");
//   div.textContent = Math.random();
//   nestedBtn.textContent = "button";
//   //   nestedBtn.addEventListener("click", (e) => {
//   //     div.remove();
//   //   });
//   div.appendChild(nestedBtn);
//   container.appendChild(div);
// });

// container.addEventListener("click", (e) => {
//   console.log(e.target);
//   if (e.target.tagName === "BUTTON") {
//     console.log("button clicked");
//   }
// });

// let counter = 0;
// const fn = () => {
//   counter++;
// };

// function throttle(callback, delay) {
//   let isWaiting = false;
//   return function (...args) {
//     if (isWaiting) {
//       console.log("isWaiting");
//       return;
//     }
//     callback.apply(this, args);
//     isWaiting = true;

//     setTimeout(() => (isWaiting = false), delay);
//   };
// }

// const throttledFn = throttle(fn, 500); // функция может быть вызвана не чаще, чем раз в 500 мс

// const intervalId = setInterval(throttledFn, 100);
// setTimeout(() => clearInterval(intervalId), 1000); // удаляем интервал через 10 вызовов

// setTimeout(() => console.log(counter), 1300); // 3

// debounce

// let counter = 0;
// const fn = () => {
//   counter++;
// };
// // window.addEventListener(
// //   "resize",
// //   debounce((event) => {})
// // );
// // const debounce = (callback, delay) => {
// //   let timer;
// //   return function (...args) {
// //     clearTimeout(timer);
// //     timer = setTimeout(() => {
// //       callback.apply(args, this);
// //     }, delay);
// //   };
// // };

// const debounce = (fn, debounceTime) => {
//   let timer;
//   return function () {
//     const context = this;
//     const args = arguments;

//     clearTimeout(timer);
//     timer = setTimeout(() => fn.apply(context, args), debounceTime);
//   };
// };

// const debounce = (func, delay) => {
//   let inDebounce;
//   return function () {
//     const context = this;
//     const args = arguments;
//     clearTimeout(inDebounce);
//     inDebounce = setTimeout(() => func.apply(context, args), delay);
//   };
// };

// const debouncedFn = debounce(fn, 200);
// debouncedFn(); // первый вызов
// setTimeout(debouncedFn, 100); // вызов через 100 мс после последнего вызова
// // первый вызов был заблокирован, второй ожидает окончания таймера
// setTimeout(debouncedFn, 200); // вызов через 100 мс после последнего вызова
// // второй вызов был заблокирован, третий ожидает окончания таймера
// setTimeout(debouncedFn, 300); // ...
// setTimeout(debouncedFn, 400); // после этого вызова не следует других вызовов
// // только этот вызов сработает, т.к. после него прошло 200 мс и других вызовов не было
// setTimeout(() => {
//   console.log(counter);
// }, 3000); // 1

let data = {
  Рыбы: {
    форель: {},
    лосось: {},
  },

  Деревья: {
    Огромные: {
      секвойя: {},
      дуб: {},
    },
    Цветковые: {
      яблоня: {},
      магнолия: {},
    },
  },
};
// let ulGlobal = document.createElement("ul");
// function recursiaTree(data) {
//   let ul = document.createElement("ul");
//   for (let key in data) {
//     console.log(key);
//     if (typeof data[key] === "object" && Object.keys(data[key]).length !== 0) {
//       let li = document.createElement("li");
//       li.textContent = key;
//       ul.append(li);
//       recursiaTree(data[key]);
//       // recursia
//     } else {
//       let li = document.createElement("li");
//       li.textContent = key;
//       ul.appendChild(li);
//     }
//   }
//   document.body.append(ul);
// }

// recursiaTree(data);

// function createTree(container, obj) {
//   container.append(createTreeDom(obj));
// }

// function createTreeDom(obj) {
//   // если нет дочерних элементов, то вызов возвращает undefined
//   // и элемент <ul> не будет создан
//   if (!Object.keys(obj).length) return;

//   let ul = document.createElement("ul");

//   for (let key in obj) {
//     let li = document.createElement("li");
//     li.innerHTML = key;

//     let childrenUl = createTreeDom(obj[key]);
//     if (childrenUl) {
//       li.append(childrenUl);
//     }

//     ul.append(li);
//   }

//   return ul;
// }

// let container = document.getElementById("container");
// createTree(container, data);

// container.addEventListener("click", function (e) {
//   console.log(e.type, e.currentTarget, e.clientX, e.clientY);
// });

// const text = document.querySelector("div");
// const btn = document.querySelector("button");
// btn.onclick = function () {
//   text.remove();
// };

// const btn = document.querySelector("button");

// btn.onclick = function () {
//   btn.hidden = true;
// };

// const btn = document.querySelector("button");
// const wrap = document.querySelector(".wrap");

// btn.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("click btn");
// });
// document.body.addEventListener(
//   "click",
//   (e) => {
//     // e.stopPropagation();
//     console.log("click body");
//   },
//   true
// );
// wrap.addEventListener(
//   "click",
//   (e) => {
//     console.log("click wrap");
//   },
//   true
// );

// wrap.addEventListener("click", (e) => {
//   e.stopImmediatePropagation();
//   console.log("click wrap");
// });

// document.body.addEventListener("click", (e) => {
//   // e.stopPropagation();
//   console.log("click body");
// });

// class Menu {
//   constructor(elem) {
//     elem.onclick = this.onClick.bind(this);
//   }

//   save() {
//     console.log("save");
//   }

//   load() {
//     console.log("load");
//   }

//   search() {
//     console.log("search");
//   }

//   onClick(e) {
//     let action = e.target.dataset.action;
//     if (action) {
//       this[action]();
//     }
//   }
// }

// new Menu(menu);

// Делегирование событий

// document.addEventListener("click", (e) => {
//   if (e.target.tagName !== "BUTTON") {
//     return;
//   }
//   e.target.closest("div").remove();
// });

// document.addEventListener("click", (e) => {
//   if (!e.target.firstElementChild) return;
//   console.log(e.target, "dsfsdf");
//   console.log(e.target.firstElementChild.firstElementChild);
// });

// document.addEventListener("click", (e) => {
//   if (e.target.tagName === "HTML") return;
//   e.target
//     .querySelectorAll("li")
//     .forEach((elem) => (elem.hidden = !elem.hidden));
// });

// let li = document.querySelector("li");
// li.hidden = true;

// const table = document.getElementById("grid");
// table.addEventListener("click", (e) => {
//   if (
//     e.target.dataset.type !== "number" &&
//     e.target.dataset.type !== "string"
//   ) {
//     return;
//   }
//   if (e.target.dataset.type === "number") {
//     console.log(e.target.closest("table").tBodies[0].rows);
//   }
// });

// .sort((a, b) => +a[0].textContent - +b[0].textContent)

// localStorage.setItem("data", 5);
// console.log(localStorage.getItem("data"));

// const a = [3, 4, 5];
// localStorage.setItem("a", a);
// let b = localStorage.getItem("a");
// console.log(b.split(",").map((el) => +el));
// const c = "3,4,5,6";
// console.log(c.split(",").map((el) => +el));

const btn = document.querySelector(".btn-get-posts");
const btnAddPost = document.querySelector(".btn-add-post");
const container = document.querySelector(".container");

// function getPosts(cb) {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

//   xhr.addEventListener("load", (e) => {
//     const responce = JSON.parse(xhr.responseText);
//     cb(responce);
//   });

//   xhr.addEventListener("error", () => {
//     console.log("error");
//   });

//   xhr.send();
// }

// function renderPost(responce) {
//   const fragment = document.createDocumentFragment();
//   responce.forEach((post) => {
//     const card = document.createElement("div");
//     card.classList.add("card");
//     const cardBody = document.createElement("div");
//     cardBody.classList.add("card-body");
//     const title = document.createElement("h5");
//     title.classList.add("card-title");
//     title.textContent = post.title;
//     const article = document.createElement("p");
//     article.classList.add("card-text");
//     article.textContent = post.body;
//     cardBody.appendChild(title);
//     cardBody.appendChild(article);
//     card.appendChild(cardBody);
//     fragment.appendChild(card);
//   });
//   container.appendChild(fragment);
// }

// btn.addEventListener("click", (e) => {
//   getPosts(renderPost);
// });

// function getPosts(cb) {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
//   xhr.responseType = "json";
//   xhr.addEventListener("load", (e) => {
//     cb(xhr.response);
//   });

//   xhr.addEventListener("error", () => {
//     console.log("error");
//   });

//   xhr.send();
// }

// function createPost(body, cb) {
//   const xhr = new XMLHttpRequest();
//   xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
//   xhr.responseType = "json";
//   xhr.addEventListener("load", (e) => {
//     cb(xhr.response);
//   });

//   xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");

//   xhr.addEventListener("error", () => {
//     console.log("error");
//   });

//   xhr.send(JSON.stringify(body));
// }

// function cardTemplate(post) {
//   const card = document.createElement("div");
//   card.classList.add("card");
//   const cardBody = document.createElement("div");
//   cardBody.classList.add("card-body");
//   const title = document.createElement("h5");
//   title.classList.add("card-title");
//   title.textContent = post.title;
//   const article = document.createElement("p");
//   article.classList.add("card-text");
//   article.textContent = post.body;
//   cardBody.appendChild(title);
//   cardBody.appendChild(article);
//   card.appendChild(cardBody);
//   return card;
// }

// function renderPost(responce) {
//   const fragment = document.createDocumentFragment();
//   responce.forEach((post) => {
//     fragment.appendChild(cardTemplate(post));
//   });
//   container.appendChild(fragment);
// }

// btn.addEventListener("click", (e) => {
//   getPosts(renderPost);
// });
// btnAddPost.addEventListener("click", (e) => {
//   const newPost = {
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   };
//   createPost(newPost, (responce) => {
//     const card = cardTemplate(responce);
//     container.prepend(card);
//   });
// });

// window.onerror = function (message, url, line, col, error) {
//   console.log(message + " 555sdfsdf", url, line, col, error);
// };

// throw new Error("sdfsdfsd");

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((responce) => {
//     return responce.json();
//   })
//   .then((responce2) => {
//     console.log(responce2);
//   })
//   .catch((err) => console.log(error));

// function getPost(id) {
//   return new Promise((resolve, reject) => {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       .then((responce) => responce.json())
//       .then((post) => resolve(post))
//       .catch((err) => reject(err));
//   });
// }

// getPost(1)
//   .then((post) => {
//     console.log(post);
//   })
//   .catch((err) => console.log(err));

// function getPost2(id) {
//   const [userType, userId] = id.split("-");
//   return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`).then(
//     (responce) => responce.json()
//   );
// }

// // getPost2("user-1")
// //   .then((post) => console.log(post))
// //   .catch((err) => console.log(err));

// function getPost3(id) {
//   return Promise.resolve().then(() => {
//     const [userType, userId] = id.split("-");
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`).then(
//       (responce) => responce.json()
//     );
//   });
// }

// getPost3(1)
//   .then((post) => console.log(post))
//   .catch((err) => console.log(err));

//Проработай

// document.getElementById("addTodo").addEventListener("click", async () => {
//   const input = document.getElementById("todoText");
//   const title = input.value;

//   if (title) {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ title, completed: false }),
//     });

//     const todo = await res.json();
//     todoToHTML(todo);

//     input.value = "";
//   }
// });

// async function getAllTodos() {
//   let url = new URL("https://jsonplaceholder.typicode.com/todos");
//   url.searchParams.set("_limit", "10");
//   const res = await fetch(url);
//   const todos = await res.json();

//   console.log(todos);
//   todos.forEach((todo) => {
//     todoToHTML(todo);
//   });
// }

// window.addEventListener("DOMContentLoaded", getAllTodos);

// function todoToHTML({ id, completed, title }) {
//   const todoList = document.getElementById("todos");
//   todoList.insertAdjacentHTML(
//     "beforeend",
//     `
//                 <div class="form-check" id ="todo${id}">
//                     <label class="form-check-label">
//                         <input onchange="toggleCompleteTodo(${id})" type="checkbox" class="form-check-input" ${
//       completed && "checked"
//     }>
//                         ${title}
//                     </label>
//                     <button onclick="deleteTodo(${id})" type="button" class="btn-close"
//                         aria-label="Close" style="font-size: 10px;"></button>
//                 </div>
//                 `
//   );
// }

// async function deleteTodo(id) {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
//     method: "DELETE",
//     headers: {
//       "Content-type": "application/json",
//     },
//   });

//   const data = await res.json();
//   console.log(data);

//   if (data) {
//     document.getElementById(`todo${id}`).remove();
//   }
// }

// async function toggleCompleteTodo(id) {
//   const completed = document.querySelector(`#todo${id} input`).checked;

//   const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify({ completed }),
//   });

//   const data = await res.json();
//   console.log(data);
// }

// const requestURL = new URL("https://jsonplaceholder.typicode.com/users");

// function sendRequest(method, url, body = null) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();

//     xhr.open(method, url);

//     xhr.responseType = "json";
//     xhr.setRequestHeader("Content-Type", "application/json");

//     xhr.onload = function (e) {
//       if (xhr.status >= 400) {
//         reject(xhr.response);
//       } else {
//         resolve(xhr.response);
//       }
//     };

//     xhr.onerror = function (e) {
//       reject(xhr.response);
//     };

//     xhr.send(JSON.stringify(body));
//   });
// }

// // sendRequest("GET", requestURL)
// //   .then((resolved) => console.log(resolved))
// //   .catch((error) => console.log(error));

// const body1 = {
//   name: "Midhat",
//   age: 28,
// };

// sendRequest("POST", requestURL, body1)
//   .then((resolved) => console.log(resolved))
//   .catch((error) => console.log(error));

//fetch

const requestURL = new URL("https://jsonplaceholder.typicode.com/users");

// function sendRequest(method = "GET", url, body = null) {
//   const headers = {
//     "Content-Type": "application/json",
//   };
//   return fetch(url, {
//     method: method,
//     body: JSON.stringify(body),
//     headers: headers,
//   }).then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     return response.json().then((error) => {
//       const e = new Error("Что-то пошло не так!");
//       e.data = error;
//       throw e;
//     });
//   });
// }

// // sendRequest("GET", requestURL)
// //   .then((resolved) => console.log(resolved))
// //   .catch((error) => console.log(error));

// const body1 = {
//   name: "Midhat",
//   age: 28,
// };

// sendRequest("POST", requestURL, body1)
//   .then((resolved) => console.log(resolved))
//   .catch((error) => console.log(error));

// async function getUsers(names) {
//   let jobs = [];

//   for (let name of names) {
//     let job = fetch(requestURL).then(
//       (successResponse) => {
//         if (successResponse.status != 200) {
//           return null;
//         } else {
//           return successResponse.json();
//         }
//       },
//       (failResponse) => {
//         return null;
//       }
//     );
//     jobs.push(job);
//   }

//   let results = await Promise.all(jobs);
//   setTimeout(() => [console.log(results)], 1000);
//   return results;
// }

// getUsers(["Midhat10", "Midhat3"]);

// CRUD

// let url = new URL(
//   "`https://api.github.com/search/repositories?q=${this.view.searchInput.value}"
// );

// const xhr = new XMLHttpRequest();

// xhr.open("GET", url);
// xhr.send();
// xhr.responseType = "json";

// xhr.addEventListener("load", () => {
//   console.log(xhr.response);
//   console.log(xhr.response.length);
//   console.log(xhr.status);
//   console.log(xhr.statusText);
// });
// xhr.addEventListener("error", () => {
//   console.log("error");
// });
// xhr.addEventListener("progress", (e) => {
//   console.log(e.loaded);
//   console.log(e.total, "dff");
// });

// fetch(url)
//   .then((metaData) => {
//     return metaData.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
