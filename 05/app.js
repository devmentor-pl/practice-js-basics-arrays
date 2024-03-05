const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbersArray = numbers.filter(evenNumbers);
console.log(evenNumbersArray);

function evenNumbers(element) {
    if (element % 2 === 0) {
        return element
    }
}

const initialValue = 0;

const sumEvenNumbers = evenNumbersArray.reduce(sumNumbers);


function sumNumbers(item, currentValue) {
    return item + currentValue
}

console.log(sumEvenNumbers);