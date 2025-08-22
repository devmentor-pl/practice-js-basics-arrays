const numbers = [1, 2, 3, 4, 5, 6, 7]
const evenNumbers = filterToEvenNumbers(numbers)
const sum = getSum(evenNumbers)

function filterToEvenNumbers(arrOfNumbers) {
    return arrOfNumbers.filter(function (number) {
        return number % 2 === 0
    })
}
function getSum(arrOfNumbers) {
    return arrOfNumbers.reduce(function (reducer, element) {
        return reducer + element
    }, 0)
}

console.log({ sum })