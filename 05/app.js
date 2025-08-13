const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(function (el) {
  return el % 2 === 0;
});
const evenNumbersSum = evenNumbers.reduce(function (sum, el) {
  return sum + el;
}, 0);

console.log(evenNumbersSum);
