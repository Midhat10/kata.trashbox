const createObjectCalculator = (initialA, initialB) => {
  const calculator = {
    read(secondA = initialA, secondB = initialB) {
      this.a = secondA;
      this.b = secondB;
    },
    sum() {
      return this.a + this.b;
    },
    mul() {
      return this.a * this.b;
    },
  };
  calculator.read();
  return calculator;
};

const calculator = createObjectCalculator(2, 3);

console.log(calculator.sum()); // 2 + 3 = 5
console.log(calculator.mul()); // 2 * 3 = 6
console.log(calculator.read(12, 34));
console.log(calculator.sum()); // 12 + 34 = 46
console.log(calculator.mul()); // 12 * 34 = 408
calculator.read(10, 5);
console.log(calculator.sum()); // 12 + 34 = 46
console.log(calculator.mul()); // 12 * 34 = 408
