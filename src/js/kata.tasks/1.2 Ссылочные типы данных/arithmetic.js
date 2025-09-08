const arithmetic = (a, b, operator) => {
  let c;
  switch (operator) {
    case "add":
      c = a + b;
      break;
    case "subtract":
      c = a - b;
      break;
    case "divide":
      c = a / b;
      break;
    case "multiply":
      c = a * b;
      break;
    default:
      c = NaN;
  }
  return c;
};

arithmetic(5, 10, "add");
arithmetic(5, 2, "subtract");
arithmetic(5, 2, "multiply");
arithmetic(5, 2, "divide");
arithmetic(5, 2, "aaa");
