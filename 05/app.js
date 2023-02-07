const numbers = [1, 2, 3, 4, 5, 6, 7];

const sumOfEven = numbers.filter(el => el % 2 === 0).reduce((acc, curr) => acc + curr, 0);

console.log(sumOfEven);