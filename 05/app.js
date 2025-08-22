const numbers = [1, 2, 3, 4, 5, 6, 7];
const evenNumbers = numbers.filter(evenOperation);
const finalNumber = evenNumbers.reduce(sumOperation, 0);

function evenOperation(number) {
    if (number % 2 == 0) {
        return number;
    }
}

console.log(evenNumbers);

function sumOperation(a, b) {
    return a+b;
}

console.log(finalNumber);