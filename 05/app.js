const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers
  .filter((num) => num % 2 === 0)
  .reduce((acc, current) => acc + current, 0)

console.log(evenNumbers) //12