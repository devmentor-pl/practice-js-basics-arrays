const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(number => number % 2 === 0);

const sum = 0;
const sumEvenNumbers = evenNumbers.reduce((firstNumber, secondNumber) => firstNumber + secondNumber, sum);

console.log(sumEvenNumbers);