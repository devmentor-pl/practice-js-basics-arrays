const numbers = [1, 2, 3, 4, 5, 6, 7];
const evenNumbers = numbers.filter(checkEvenNumbers)
const sumOfEvenNumbers = evenNumbers.reduce((acc, curr) => acc + curr, 0);

console.log(
  'Suma wszystkich liczb parzystych w tablicy wynosi:',
  sumOfEvenNumbers
);

function checkEvenNumbers(numbers) {
  return numbers % 2 === 0
}