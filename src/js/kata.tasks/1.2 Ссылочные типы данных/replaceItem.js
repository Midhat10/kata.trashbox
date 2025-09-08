function replaceItemsClear(arr, item, replaceItem) {
  let arr2 = [];
  for (let value of arr) {
    if (value === item) {
      value = replaceItem;
    }
    arr2.push(value);
  }
  return arr2;
}

function replaceItemsMutate(arr, item, replaceItem) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      arr[i] = replaceItem;
    }
  }
  return arr;
}

replaceItemsClear([1, 2, 3, 4, 2], 2, "a"); //  [1,'a',3,4,'a']
const arr = [1, 2, 3, 4, 2];
replaceItemsMutate(arr, 2, "a");
