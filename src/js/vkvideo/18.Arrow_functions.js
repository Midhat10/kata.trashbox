const plus = (x = 0, y = 0) => x + y;

console.log(plus(4, 3));

const withoutArgs = () => console.log("Hello world!");

const singleArg = (x = 1) => x * 2;

const moreActions = (a, b) => {
  a *= 2;
  b *= 3;
  return a + b;
};
const returnObj = (str = "") => ({
  value: str,
  lenght: str.length,
});

function plusFoo(x, y) {
  console.log(arguments);
  return x + y;
}

// plusFoo(3, 4, 3, "Hello");

const obj = {
  firstName: "Denis",
  age: 30,
  getFirstName() {
    console.log(this);
  },
  getAgeArrow: null,
  getAge() {
    // this.getAgeArrow = () => console.log(this);
    setTimeout(() => console.log(this));
  },
};

// obj.getFirstName();

let ask = (question, yes, no) => (confirm(question) ? yes() : no());

ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение."),
);
