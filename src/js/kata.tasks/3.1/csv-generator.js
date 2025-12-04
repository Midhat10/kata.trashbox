// csvGenerator

// function arrayToCsv(data) {
//   let arr = [];
//   for (let value of data) {
//     for (let i = 0; i < value.length; i++) {
//       if (typeof value[i] !== "string" && typeof value[i] !== "number")
//         throw Error("Unexpected value");
//       if (typeof value[i] === "string" && value[i].length > 1) {
//         value[i] = '"' + String(value[i]).replace(/"/g, '""') + '"';
//       }
//     }
//     let str = value.join();
//     arr.push(str);
//   }
//   return arr.join("\n");
// }

// console.log(
//   arrayToCsv([
//     [1, 2],
//     ["a", "b"],
//   ])
// );

// console.log(
//   arrayToCsv([
//     [1, 2],
//     ["a,b", "c,d"],
//   ])
// );
