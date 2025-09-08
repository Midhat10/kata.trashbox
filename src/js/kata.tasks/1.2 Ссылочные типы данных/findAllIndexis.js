function findAllIdx(arr, value) {
  let emptyArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      emptyArr.push(i);
    }
  }
  return emptyArr;
}

findAllIdx([1, 0, 1, 0, 0, 1], 0); // [1,3,4]
findAllIdx([1, 1], 0); // []
