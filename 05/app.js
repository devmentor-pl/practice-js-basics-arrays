const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const evenNumbers = numbers.filter(function (num) { return !(num % 2) })
const sumNumbers = evenNumbers.reduce(function (accumulator, currentValue) { return accumulator + currentValue })

console.log(evenNumbers)
console.log(sumNumbers)

// CALLBACK

// const evenNumbers = numbers.filter(checkEvenNumers)
// const sumNumbers = evenNumbers.reduce(sum)

// function checkEvenNumers(number) {
//     return number % 2 === 0
// }

// function sum(accumulator, currentValue) {
//     return accumulator + currentValue
// }

