const numbers = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;
const newArr = numbers.filter(number => number % 2 === 0);
const sumFromArr = newArr.reduce((acc, curr) => acc + curr, 0);

console.log(sumFromArr);
