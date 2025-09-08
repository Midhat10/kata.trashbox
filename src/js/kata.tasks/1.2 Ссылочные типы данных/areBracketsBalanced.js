const areBracketsBalanced = (str) => {
  let left = 0;
  let right = 0;
  if (str === "") {
    return true;
  }
  for (let key in str) {
    if (str[key] === "(" && left >= right) {
      left++;
    } else if (str[key] === ")") {
      right++;
    } else {
      return false;
    }
  }
  if (left !== right) {
    return false;
  }
  return true;
};

console.log(areBracketsBalanced("999)99()"));
console.log(
  areBracketsBalanced(""),
  areBracketsBalanced("(())"),
  areBracketsBalanced("()f"),
);
