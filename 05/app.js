const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenSum = numbers.filter(num => num % 2 === 0).reduce((acc, curr) => acc + curr, 0);

console.log(evenSum);
