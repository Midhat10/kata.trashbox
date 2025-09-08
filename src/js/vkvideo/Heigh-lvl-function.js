// function foo() {
//   console.log("hello");
// }

// foo();

// foo.field = "Midhat";

// console.log(foo.field);

// const arr = ["Midhat", "Deni", "Maks", "Elenaa"];
// [6,4,4,6]

// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   newArr.push(arr[i].length);
// }

// console.log(newArr);

// let newArr2 = [];
// for (let i = 0; i < arr.length; i++) {
//   newArr2.push(arr[i].toUpperCase());
// }

// console.log(newArr2);

const names = ["Midhat", "Deni", "Maks", "Elenaa"];

function mapArray(arr, fn) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(fn(arr[i]));
  }
  return res;
}

function nameLength(el) {
  // console.log(el.length);
  return el.length;
}

function nameToUpperCase(el) {
  return el.toUpperCase();
}

const result = mapArray(names, nameLength);

// console.log(result);

const result1 = mapArray(names, nameToUpperCase);

// console.log(result1);

function greeting(firstname) {
  return function (lastname) {
    return `Hello, ${firstname} ${lastname}`;
  };
}

// const testGreeting = greeting("Midhat");
// console.log(testGreeting("Farkhutdinov"));

const fullName = greeting("Denis")("Farkhutdinov");
// console.log(fullName);

function question(job) {
  const jobDictionary = {
    developer: "что такое Javascript",
    teacher: "какой предмет вы ведёте",
  };
  return function (name) {
    return `${name}, ${jobDictionary[job]}?`;
  };
}

// const developerQuestion = question("developer");
// console.log(developerQuestion("Midhat"));
// const teacherQuestion = question("teacher");
// console.log(teacherQuestion("Midhat"));
