const numbers = [];

const evenSumArray = evenSum(numbers);
console.log(evenSumArray)

function evenSum(array) {
    if (array.length > 0) {
        const evenNumbersSum = numbers.filter(onlyEven).reduce(sum);
        return evenNumbersSum;
    } else return 0;
}

function onlyEven(element) {
    return element % 2 === 0;
}

function sum(a, b) {
    return a + b;
}