const numbers = [1, 2, 3, 4, 5, 6, 7];

const sumOfEvenNumbers = numbers.filter(number => number%2 === 0).reduce((prev, curr) => prev + curr);
console.log(sumOfEvenNumbers);
