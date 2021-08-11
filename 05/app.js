const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(function (el) {
  return el % 2 == 0 ? true : false;
});

const sum = evenNumbers.reduce(function (total, el) {
  return total + el;
}, 0);

console.log(numbers);
console.log(evenNumbers);
console.log(sum);
