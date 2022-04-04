const numbers = [1, 2, 3, 4, 5, 6, 7];

const filteredNumbers = numbers.filter(element => element % 2 === 0)

console.log(filteredNumbers)

const sumOfFilteredNumbers = filteredNumbers.reduce((a, b) => a + b);

console.log(sumOfFilteredNumbers)