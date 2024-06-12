const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(isEven)

function isEven(num) {
    return num % 2 === 0
}
console.log(evenNumbers)


const sum = evenNumbers.reduce(fn)

function fn(previous, current) {
    return previous + current
}
console.log(sum)