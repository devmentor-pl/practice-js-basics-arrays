const numbers = [1, 2, 3, 4, 5, 6, 7];

numbers.filter(el => el % 2 === 0).reduce((a, b) => a + b);