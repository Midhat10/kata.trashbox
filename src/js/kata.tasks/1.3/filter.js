function inRange(a, b) {
  return function (x) {
    x = Number(x);
    return a <= x && b >= x;
  };
}

function inArray(arr) {
  return function (x) {
    return arr.includes(x);
  };
}

function notInArray(arr) {
  return function (x) {
    return !arr.includes(x);
  };
}

let arr = [1, 2, 3, 4, 5, 6, 7, true, undefined, NaN];

console.log(arr.filter(inRange(3, 6))); // [3, 4, 5, 6]
console.log(arr.filter(inArray([1, 2, 10, undefined]))); // [1, 2, undefined]
console.log(arr.filter(notInArray([1, 2, 3, 4, 5, 6, 7, true]))); // [undefined, NaN]
