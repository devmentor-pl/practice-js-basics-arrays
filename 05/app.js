const sumEvenNumbers = (arr) => {
  const evenNumbersSum = arr
    .filter((num) => num % 2 === 0)
    .reduce((sum, el) => sum + el, 0);
  return evenNumbersSum;
};
console.log(sumEvenNumbers([1, 2, 3]));
