// let i = 10;
// while (i--) {
//   console.log(i);
// }

// do {
//   console.log("action");
// } while (i > 0);

// console.log(i);

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }

// перебор строк, массивы, объекты, дом коллекция.
// let str = "Hello";
// let res = "";

// for (let i = 0; i < str.length; i++) {
//   res += str[i] + "*";
// }

// console.log(res);

// let colors = ["white", "black", "yellow", "orange"];

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
//   colors[i] = colors[i].toUpperCase();
// }

// console.log(colors);

const users = [
  {
    name: "Midhat",
    age: 28,
  },
  {
    name: "Radimir",
    age: 33,
  },
  {
    name: "Olga",
    age: 23,
  },
];

const usersObj = {};

for (let i = 0; i < users.length; i++) {
  usersObj[users[i].name] = users[i];
}

// console.log(usersObj["Midhat"]);

// const user = {
//   name: "Denis",
//   age: 30,
// };

// for (let key in usersObj) {
//   console.log(key);
//   console.log(usersObj[key]);
// }

for (let value of users) {
  console.log(value);
}
