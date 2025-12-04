let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

const multiplyNumeric = function (obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
      console.log(obj[key]);
    }
  }
};

multiplyNumeric(menu);
console.log(menu);
