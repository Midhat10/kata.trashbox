// function callback(element) {
//   return Boolean(element);
// }

function partition(arr, fn = (element) => Boolean(element)) {
  const orderArr = [];
  const trueArr = [];
  const falseArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      trueArr.push(arr[i]);
    } else {
      falseArr.push(arr[i]);
    }
  }
  orderArr.push(trueArr, falseArr);
  return orderArr;
}

// const numbers = [1, 2, 3, 4, 5, 6];

// console.log(partition(numbers, (element) => element > 3));

const numbers = [0, 1, 2, {}, false, "", "0"];

console.log(partition(numbers));

// const users = [
//   { user: "barney", age: 36, active: false },
//   { user: "fred", age: 40, active: true },
//   { user: "pebbles", age: 1, active: false },
// ];

// console.log(partition(users, (element) => element.active));
