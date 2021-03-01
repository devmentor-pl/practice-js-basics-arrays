const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(number => number%2 === 0);
const sumOfEvenNumbers = evenNumbers.reduce((prev, curr) => prev + curr, 0);
console.log(sumOfEvenNumbers);
