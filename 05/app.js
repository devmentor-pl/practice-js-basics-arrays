const numbers = [1, 2, 3, 4, 5, 6, 7];
const evenNumbers = numbers.filter((item) => item % 2 === 0);
const sum = evenNumbers.reduce((item, x) => item + x, 0)
console.log(evenNumbers);
console.log(sum);

