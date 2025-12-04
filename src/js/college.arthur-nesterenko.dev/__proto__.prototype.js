// Практика к prototype/__proto__
// String.prototype.reverse = function () {
//   let arr1 = [];
//   let a = this.toLowerCase();
//   for (let i = a.length - 1; i >= 0; i--) {
//     arr1.push(a.split("")[i]);
//   }
//   return arr1.join("");
// };
// // console.log("hello".reverse());

// // string isPalindrome

// String.prototype.isPalindrome = function () {
//   if (String(this).toLowerCase() === this.reverse()) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log("hello".isPalindrome());
// console.log("level".isPalindrome());
// console.log("Madam".isPalindrome());

// Array.prototype.first = function () {
//   return this[0];
// };
// Array.prototype.last = function () {
//   return this.at(-1);
// };
// Array.prototype.diff = function (arr2) {
//   for (let i = 0; i < arr2.length; i++) {
//     for (let j = 0; j < this.length; j++) {
//       if (arr2[i] === this[j]) {
//         this.splice(j, 1);
//       }
//     }
//   }
//   return this;
// };

// var b = [1, 2, 3, 4];
// b.splice(2, 1);
// console.log(b);

// var firstNum = [1, 2, 3].first();
// console.log(firstNum);

// var firstWord = ["Hello", "world"].first();

// console.log(firstWord);
// console.log([].first());

// var lastNum = [1, 2, 3].last(); // 3

// var lastWord = ["Hello", "world"].last(); // "world";
// console.log(lastNum, lastWord, [].last()); // undefined

// var result = [1, 2, 3].diff([2, 1]);
// console.log("result", result); // [3]
