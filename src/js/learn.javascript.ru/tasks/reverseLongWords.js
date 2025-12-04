const reverseLongWords = (str) => {
  const str1 = str.trim();

  const target = " ";
  const array = [0];

  let pos = -1;
  while ((pos = str1.indexOf(target, pos + 1)) != -1) {
    pos++;
    array.push(pos);
  }

  let fullString = "";
  for (let i = 0; i < array.length; i++) {
    let word = str1.slice(array[i], array[i + 1]).trim();
    if (word.length >= 5) {
      let word2 = "";
      for (let i = word.length - 1; i >= 0; i--) {
        word2 += word[i];
      }
      fullString += " " + word2;
    } else {
      fullString += " " + word;
    }
  }

  return fullString.trim();
};

console.log(reverseLongWords("Hey fellow warriors"));
console.log(reverseLongWords("This is a test"));
console.log(reverseLongWords("This is another test"));
