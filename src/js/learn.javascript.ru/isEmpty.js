// Проверка на пустоту
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

let user1 = {};

const isEmpty = function (obj) {
  let string = "";
  for (let key in obj) {
    string += key;
  }
  if (string === "") {
    console.log(true);
  } else {
    console.log(false);
  }
};

isEmpty(user1);
isEmpty(user);
