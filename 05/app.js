const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers);
const evenNumbers = numbers.filter(el => el % 2 == 0);
console.log(evenNumbers);
const sumOfEvenNumbers = evenNumbers.reduce((acc, curr) => acc + curr);
console.log(sumOfEvenNumbers);
