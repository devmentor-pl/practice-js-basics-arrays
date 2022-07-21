const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(isEven).reduce((a, b) => a + b, 0);

function isEven(i) {
  if (i % 2 === 0) {
    return i;
  }
}

console.log(evenNumbers);
