const numbers = [1, 2, 3, 4, 5, 6, 7];
const evenNumbers = numbers.filter(checkEven);
const evenNumbersSum = evenNumbers.reduce(addEven);

console.log(evenNumbers)
console.log(evenNumbersSum);


function checkEven(number) {
    return number % 2 === 0;
}

function addEven(a, b) {
    return a + b;
}