class Calc {
  constructor(immutable = 0) {
    this._immutable = immutable;
  }

  add(x) {
    let newObj = new Calc(this._immutable);
    newObj._immutable += x;
    return newObj;
  }
  sub(x) {
    let newObj = new Calc(this._immutable);
    newObj._immutable -= x;
    return newObj;
  }
  result() {
    let newObj = new Calc(this._immutable);
    return newObj._immutable;
  }
}

const calc = new Calc();

console.log(calc.result()); // 0
console.log(calc.add(5).result()); // 0 + 5 = 5
console.log(calc.add(3).sub(10).result()); // 0 + 3 - 10 = -7

const ten = calc.add(10);
console.log(ten);
console.log(ten.sub(5).result()); // 10 - 5 = 5
console.log(ten.result()); // 10
