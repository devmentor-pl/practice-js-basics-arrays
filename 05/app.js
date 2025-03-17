const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter((number) => number % 2 === 0);
const sumEvenNumbers = evenNumbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sumEvenNumbers);
