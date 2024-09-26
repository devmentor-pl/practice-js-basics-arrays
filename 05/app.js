const numbers = [1, 2, 3, 4, 5, 6, 7];

const sum = numbers.filter((n) => n % 2 === 0).reduce((prev, curr) => (prev += curr), 0);

console.log(sum);
