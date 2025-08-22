const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

const sum = evenNumbers.reduce(getSum);
console.log(sum);

function isEven(num) {
  return num % 2 === 0;
}

function getSum(total, number) {
  return total + number;
}
