const numbers = [1, 2, 3, 4, 5, 6, 7];

const sumOfEvenNumbers = numbers
  .filter((num) => num % 2 == 0)
  .reduce((acc, num) => (acc += num));

console.log(sumOfEvenNumbers);
