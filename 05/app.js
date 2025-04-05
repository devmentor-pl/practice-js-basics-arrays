const numbers = [1, 2, 3, 4, 5, 6, 7];
const result = numbers.filter(evenNumbers);

function evenNumbers(evenNumber) {
  return evenNumber % 2 === 0;
}

const sumNumbers = 0;
const sumEvenNumbers = result.reduce((acc, curr) => acc + curr, sumNumbers);

console.log(sumEvenNumbers);
