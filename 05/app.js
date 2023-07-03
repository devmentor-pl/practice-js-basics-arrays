const numbers = [1, 2, 3, 4, 5, 6, 7];

const sumOfEvenNumbersnumbers = numbers.filter(num => num % 2 === 0).reduce((a, b) => a + b, 0);

console.log(sumOfEvenNumbersnumbers);