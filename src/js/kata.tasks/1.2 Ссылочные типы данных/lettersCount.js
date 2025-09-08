const lettersCount = function (str) {
  str = str.toLowerCase();
  const obj = {};
  for (let key in str) {
    let variable = str[key];
    if (variable in obj) {
      obj[variable] += 1;
    } else {
      obj[variable] = 1;
    }
  }
  return obj;
};

console.log(lettersCount("aAAbbccde"));
// {
//    a: 3,
//    b: 2,
//    c: 2,
//    d: 1,
//    e: 1,
// }
