const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(function (takeEven) {
  return takeEven % 2 === 0;
});

const sumEven = evenNumbers.reduce(function (even, index) {
  return even + index;
});

console.log(sumEven);
