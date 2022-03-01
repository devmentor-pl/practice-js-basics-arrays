const numbers = [1, 2, 3, 4, 5, 6, 7];
const evenNumbers = numbers.filter(isEven);
const sumEvenNumbers = evenNumbers.reduce(sum);

function isEven(element) {
    return element % 2 === 0;
}

function sum(a, b) {
    return a + b;
}

console.log(sumEvenNumbers);