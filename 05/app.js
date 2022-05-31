const numbers = [1, 2, 3, 4, 5, 6, 7];
const evenNumbers = numbers.filter(checkEvenNumbers);
const evenNumbersArray = [evenNumbers]

console.log(evenNumbers)

function checkEvenNumbers(num) {
    return num % 2 === 0
}

const getSum = evenNumbers.reduce (function (total, items) {
    return total + items;
})

console.log(getSum);