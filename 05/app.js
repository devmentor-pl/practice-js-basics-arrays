const numbers = [1, 2, 3, 4, 5, 6, 7];

const sumEven = numbers
    .filter(el => el % 2 === 0)
    .reduce(((curr, prev) => curr + prev), 0);

console.log(sumEven);