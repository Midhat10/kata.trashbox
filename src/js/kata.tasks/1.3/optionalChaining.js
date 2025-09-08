function getHello() {
  return "hello";
}

// function optionalChaining(obj, chain, i = 0) {
//   if (typeof obj[chain[i]] === "object" && !Array.isArray(obj[chain[i]])) {
//     obj = obj[chain[i]];
//     i++;
//     optionalChaining(obj, chain, i);
//   } else if (chain.length > i + 1 || chain.length === 0) {
//     // console.log("big length or undefined");
//     console.log(obj[chain[i]]);
//     return undefined;
//   } else if (chain.length < i + 1) {
//     console.log("small length");
//     console.log(i);
//     return console.log(obj);
//   } else {
//     console.log("need result");
//     return console.log(obj[chain[i]]);
//   }
// }

// function optionalChaining1(obj, chain, i = 0) {
//   if (chain.length === 0) {
//     return console.log(undefined);
//   }
//   if (chain[chain.length - 1] == chain[i] || obj[chain[i]] === undefined) {
//     return console.log(obj[chain[i]]);
//   } else {
//     obj = obj[chain[i]];
//     i++;
//     optionalChaining1(obj, chain, i);
//   }
// }

function optionalChaining(obj, chain) {
  const elem = chain.shift();
  const value = obj[elem];
  if (value !== undefined) {
    if (chain.length === 0) {
      return value;
    }
    return optionalChaining(value, chain);
  }
  return value;
}

const obj = {
  a: {
    b: {
      c: {
        d: "Привет!",
      },
    },
    d: {
      e: [1, 2, 3],
      fn: getHello(),
    },
  },
};

const obj2 = {
  father: {
    name: "Petr",
  },
  name: "Pavel",
};

console.log(optionalChaining(obj, ["a", "d", "fn"]));

console.log(optionalChaining(obj, ["a", "b", "c"])); // undefined);
console.log(optionalChaining(obj, ["a", "d"])); // Привет

console.log(optionalChaining(obj, ["a", "b", "c", "d", "e"])); // undefined

optionalChaining(obj, ["a", "c", "d"]); // undefined
console.log(optionalChaining(obj, ["b", "d", "a"])); // undefined
console.log(optionalChaining({ data: 5 }, []));
console.log(optionalChaining(obj2, ["name"]));

// let user = {
//   name: "Midhat",
// };

// if (user.hasOwnProperty("name")) {
//   console.log(user.name);
// } else {
//   console.log("else");
// }
