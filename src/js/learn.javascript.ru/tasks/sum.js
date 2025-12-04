let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
let salaries2 = {};

const sum = function (obj) {
  let number = 0;
  for (let key in obj) {
    console.log(obj[key]);
    number += obj[key];
  }
  console.log(number);
};

sum(salaries);
sum(salaries2);
