const str = "sOme RanDoM sTRING";

function capitalize(str) {
  const str1 = str.toLowerCase().trim();

  const target = " ";
  const array = [0];

  let pos = -1;
  while ((pos = str1.indexOf(target, pos + 1)) != -1) {
    pos++;
    array.push(pos);
  }

  let fullString = "";
  for (let i = 0; i < array.length; i++) {
    let word = str1.slice(array[i] + 1, array[i + 1]);
    fullString += str1[array[i]].toUpperCase() + word;
  }

  return fullString.trim();
}
console.log(capitalize(str));
