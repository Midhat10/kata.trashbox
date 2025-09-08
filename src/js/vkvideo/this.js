function getThis() {
  return console.log(this);
}

// getThis();

// window.getThis;

// console.log(this);

function getPrice(currency = "$") {
  console.log(currency + this.price);
  return this;
}

function getName() {
  console.log(this.name);
  return this;
}

const prod1 = {
  name: "Intel",
  price: 100,
  getPrice,
  getName() {
    console.log(this.name);
  },
  info: {
    information: ["2.3ghz"],
    getInfo: function () {
      console.log(this);
    },
  },
};

// prod1.getPrice();
// prod1.info.getInfo();

const prod2 = {
  name: "AMD",
  price: 50,
  getPrice,
};

prod2.getName = prod1.getName;

// prod2.getPrice();
// prod2.getName();

let str = "Hello world";
const reversStr = str.split("").reverse().join("");

// console.log(reversStr);

const prod3 = {
  name: "Arm",
  price: 250,
  getPrice,
  // getName,
};

// getPrice.call(prod3, "*");
// getPrice.apply(prod3, ["*"]);

// prod3
//   .getName() // prod3
//   .getPrice(); // prod3.getPrice()

// const getPriceBind = prod3.getPrice.bind(prod3, "*");
// console.log(getPriceBind);

// setTimeout(getPriceBind, 1000);

// Examples

// function makeUser() {
//   return {
//     name: "John",
//     ref() {
//       return this;
//     },
//   };
// }

// let user = makeUser();

// console.log(user.ref().name);

// let calculator = {
//   sum() {
//     return this.a + this.b;
//   },

//   mul() {
//     return this.a * this.b;
//   },

//   read() {
//     this.a = +prompt("a?", 0);
//     this.b = +prompt("b?", 0);
//   },
// };

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function () {
//     // показывает текущую ступеньку
//     console.log(this.step);
//     return this;
//   },
// };

// ladder.up().up().down().showStep().down().showStep();
