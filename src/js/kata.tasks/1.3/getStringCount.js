function getStringCount(arr) {
  let sum = 0;

  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      sum += getStringCount(arr[i]);
    }
  } else if (typeof arr === "object") {
    for (let key in arr) {
      sum += getStringCount(arr[key]);
    }
  } else if (typeof arr === "string") {
    sum++;
  }

  return sum;
}
const data = {
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime", 2, 3, 4],
  fifth: null,
};

console.log(getStringCount(data));

console.log(getStringCount(["1", "2", ["3", "4", ["5", "6", 7, 8, "9"]]]));
