// let i = 0;

// function func() {
//   console.log(i++);

//   if (i <= 10) {
//     func();
//   }
// }

// func();

// function func(arr) {
//   console.log(arr.shift());

//   if (arr.length != 0) {
//     func(arr);
//   }
// }

// func([1, 2, 3]);

// function func(arr, sum) {
//   sum += arr.shift();
//   if (arr.length != 0) {
//     sum = func(arr, sum);
//   }

//   return sum;
// }

// console.log(func([1, 2, 3], 0));

// function func(arr, sum = 0) {
//   sum += arr.shift();

//   if (arr.length != 0) {
//     sum = func(arr, sum);
//   }

//   return sum;
// }

// console.log(func([1, 2, 3]));

// let sum = 0;

// function func(arr) {
//   sum += arr.shift();

//   if (arr.length != 0) {
//     sum = func(arr, sum);
//   }

//   return sum;
// }

// console.log(func([1, 2, 3]));

// function func(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == "object") {
//       arr[i] = func(arr[i]);
//     } else {
//       arr[i] = arr[i] + "!";
//       console.log(typeof arr[i]);
//     }
//   }
//   return arr;
// }

// console.log(func([1, [2, 7, 8], [3, 4, [5, 6]]]));

// Задачка

// function reduceNum(num) {
//   console.log(num);
//   let sum = getDigitSum(num);

//   if (sum >= 10) {
//     return reduceNum(sum);
//   } else {
//     return sum;
//   }
// }

// function getSum(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += +arr[i];
//   }

//   return sum;
// }

// function getDigits(num) {
//   return String(num).split("");
// }

// function getDigitSum(num) {
//   return getSum(getDigits(num));
// }

// console.log(reduceNum(99));
