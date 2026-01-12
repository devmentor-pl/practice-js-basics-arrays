const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(e => e % 2 === 0);

const sum = evenNumbers.reduce((total, currentValue) => {
  return total += currentValue
});

console.log(`The sum of the even numbers inside "numbers" array is: ${sum}`);