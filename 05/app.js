const sumEvenNumbers = (arr) => {
  const evenNumbersSum = arr
    .filter((num) => num % 2 === 0)
    .reduce((sum, el) => sum + el, 0);
  console.log(evenNumbersSum);
};
sumEvenNumbers([1, 2, 3]);
