function fizzbuzz(num) {
  let name;
  if (typeof num === "number") {
    if (num % 3 === 0 && num % 5 === 0) {
      name = "FizzBuzz";
    } else if (num % 5 === 0) {
      name = "Buzz";
    } else if (num % 3 === 0) {
      name = "Fizz";
    } else {
      name = num;
    }
  }
  return name;
}

fizzbuzz(15);
