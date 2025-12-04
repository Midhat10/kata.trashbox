// kata.task
class Addition {
  constructor(num) {
    this.num = num;
  }

  add(...nums) {
    const sum = (a, b) => a + b;
    return this.num + nums.reduce(sum, 0);
  }
}

function addDecorator(f) {
  return function () {
    console.log("called");
    let result = f.apply(this, arguments);
    return result;
  };
}

Addition.prototype.add = addDecorator(Addition.prototype.add);

const startedValue = new Addition(5);
const result = startedValue.add(3, 5, 6); //В консоль выводится "called"
console.log(result); //В консоль выводится 19
