const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(x => x % 2 === 0)
console.log(evenNumbers)

console.log('metoda 1 - pętle')
initNumber = 0
sumNumbers = 0
for (let i = 0; i < evenNumbers.length; i++) {
    sumNumbers = sumNumbers + evenNumbers[i]
    console.log(sumNumbers)
}

console.log('metoda 2 - reduce')
const sumNumbers2 = evenNumbers.reduce(
    (x, y) => x + y, initNumber
)
console.log(sumNumbers2)