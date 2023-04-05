const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(isEven)

console.log(evenNumbers)

function isEven (number) {
    return number % 2 === 0
}

const sum = evenNumbers.reduce(function(acc, current) {
    return acc + current
})

console.log(sum)