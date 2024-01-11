const numbers = [1, 2, 3, 4, 5, 6, 7];
const evenNumbers = numbers.filter(getEvenNumbers);
const sum = evenNumbers.reduce(getSum);
console.log(sum);

function getEvenNumbers(num) {
  if (num % 2 === 0) {
    return num;
  }
}

function getSum(total, num) {
  return total + num;
}
