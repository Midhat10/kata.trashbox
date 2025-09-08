function sequenceSum(begin, end, sum = 0) {
  if (begin > end) return NaN;
  sum += begin;
  if (begin !== end) {
    sum = sequenceSum(begin + 1, end, sum);
  }
  return sum;
}

console.log(sequenceSum(1, 5)); // 1 + 2 + 3 + 4 + 5 = 15
console.log(sequenceSum(4, 10)); // 4 + 5 + 6 + 7 + 8 + 9 + 10 = 49
console.log(sequenceSum(-3, 2)); // (-3) + (-2) + (-1) + 0 + 1 + 2 = -3

// NaN (т.к. это "пустая" последовательность)
console.log(sequenceSum(7, 2));

// 0 (т.к. это единственное число, входящее в последовательность)
console.log(sequenceSum(0, 0));
// // 6 (т.к. это единственное число, входящее в последовательность)
console.log(sequenceSum(6, 6));
