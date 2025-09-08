function once(fn) {
  let count = 0;
  return function () {
    if (count === 0) {
      count++;
      return fn();
    }
  };
}

const f = () => console.log("hi!");
const onceF = once(f);
onceF(); // nothing
console.log(onceF());
