// const numArr = [2, 32, 1234, 54, 323];

// let value;

// value = numArr.length;
// // numArr.length = 0;
// // numArr.length = 100;

// value = numArr[2];
// numArr[2] = 12;
// value = numArr.indexOf(32);

// value = numArr.push(100);
// value = numArr.pop();

// value = numArr.unshift(111);
// value = numArr.shift();

// value = numArr.slice(0, 2);
// // value = numArr.splice(1, 0, "one");
// value = numArr.reverse();
// value = [].concat(1, 2, 3, 4);
// value = numArr.join(" ");
// value = "hello world".split();

// console.log(value, numArr);

// Задачи 1.
// const styles = ["Jazz", "Bluz"];
// styles.push("Rock-n-Roll");
// let middle;
// if (styles.length % 2 === 0) {
//   middle = styles.length / 2;
// } else {
//   middle = (styles.length - 1) / 2;
// }
// // console.log(middle);
// styles[middle] = "Classic";
// console.log(styles.shift());
// styles.unshift("Rep", "Reggy");
// console.log(styles);

// Задача 2.

// function sumInput() {
//   const arr = [];

//   while (true) {
//     let input = prompt("Введите значения, которые мы сохраним в массив");
//     if (input === "" || !isFinite(input) || input === null) break;
//     arr.push(+input);
//   }

//   let result = 0;
//   for (let value of arr) {
//     result += value;
//   }

//   return console.log(result);
// }

// sumInput();

// Задача 3.

function checkAllMinus(arr) {
  let calcMinus = 0;
  for (let value of arr) {
    if (value < 0) {
      calcMinus += 1;
    }
    if (calcMinus === arr.length) {
      return true;
    }
  }
}

function getMaxSubSum(arr) {
  if (checkAllMinus(arr)) {
    return console.log(0);
  }
  let sum = 0;
  for (let j = 1; j <= arr.length; j++) {
    for (let i = 0; i < arr.length - (j - 1); i++) {
      const arr2 = arr.slice();
      let subarr = arr2.splice(i, j);
      let subsum = 0;
      for (let value of subarr) {
        subsum += value;
      }
      if (subsum > sum) {
        sum = subsum;
      }
    }
  }
  return console.log(sum);
}

getMaxSubSum([-1, 2, 3, -9]) == 5; //(сумма выделенных элементов)
getMaxSubSum([2, -1, 2, 3, -9]) == 6;
getMaxSubSum([-1, 2, 3, -9, 11]) == 11;
getMaxSubSum([-2, -1, 1, 2]) == 3;
getMaxSubSum([100, -9, 2, -3, 5]) == 100;
getMaxSubSum([1, 2, 3]) == 6; //(берём все)
getMaxSubSum([-1, -2, -3]);
