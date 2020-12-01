const numbers = [1, 2, 3, 4, 5, 6, 7];

function isEven(arr) {
    return arr % 2 === 0;
}

function sumEven(arr1, arr2) {
    return arr1 + arr2;
}

const resultIsEven = numbers.filter(isEven);
console.log(resultIsEven);
const resultSumEven = resultIsEven.reduce(sumEven);
console.log('Suma liczb pazystych tablicy numbers wynosi: ' + resultSumEven);
