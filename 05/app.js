const numbers = [1, 2, 3, 4, 5, 6, 7];

let entireNumbers = numbers.filter(function (i) {
  return i % 2 === 0;
});

sumEntireNumbers = entireNumbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
});

console.log(sumEntireNumbers);
