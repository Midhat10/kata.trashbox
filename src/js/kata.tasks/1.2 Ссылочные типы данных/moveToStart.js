const moveToStart = (arr, n) => {
  const arr2 = arr.slice();
  if (n >= arr.length) {
    return arr2;
  }
  for (let i = 0; i < n; i++) {
    arr2.unshift(arr2.pop());
  }
  return arr2;
};

console.log(moveToStart([1, 2, 3, 4, 5], 3)); // [3, 4, 5, 1, 2]

console.log(moveToStart([1, 2, 3, 4, 5], 2)); // [ 4, 5, 1, 2, 3]

console.log(moveToStart([1, 2, 3, 4, 5], 10)); // [1, 2, 3, 4, 5]
