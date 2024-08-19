const numbers = [1, 2, 3, 4, 5, 6, 7];


const evenNumbersSum = numbers
  .filter(number => number % 2 === 0)
  .reduce((sum, number) => sum + number, 0);

console.log(evenNumbersSum);