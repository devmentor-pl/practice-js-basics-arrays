const numbers = [1, 2, 3, 4, 5, 6, 7];

function addEvenNumbers(numbers) {
  const sumOfEvenNumbers = numbers
    .filter((num) => num % 2 === 0)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  return sumOfEvenNumbers;
}

const sumOfEvenNumbers = addEvenNumbers(numbers);
console.log(sumOfEvenNumbers);
