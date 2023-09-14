const numbers = [1, 2, 3, 4, 5, 6, 7];

const numbersEvenTotal = numbers.filter(getEven).reduce(numbersTotal);

console.log(numbersEvenTotal);

function getEven(numbers) {
  return numbers % 2 === 0;
}

function numbersTotal(total, num) {
  return total + num;
}
