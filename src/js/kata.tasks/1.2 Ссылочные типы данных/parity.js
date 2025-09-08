const data = [1, 2, 3, 4, 5, 6];

const getNumbersByParity = (data, parity) => {
  const arr = [];
  switch (parity) {
    case "even":
      for (let value of data) {
        if (value % 2 === 0) {
          arr.push(value);
        }
      }
      break;
    case "odd":
      for (let value of data) {
        if ((value + 1) % 2 === 0) {
          arr.push(value);
        }
      }
      break;
    default:
      return "write odd or even";
  }
  return arr;
};

console.log(getNumbersByParity(data, "even")); // [2, 4, 6];
console.log(getNumbersByParity(data, "odd")); // [1, 3, 5];
console.log(getNumbersByParity([], "odd")); // [1, 3, 5];
