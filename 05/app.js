const numbers = [1, 2, 3, 4, 5, 6, 7];
const EvenNumbers = numbers.filter(el => el % 2 === 0);
const sumOfNumbersFromArray = EvenNumbers.reduce((prev, curr) => prev + curr)

console.log(sumOfNumbersFromArray)