const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(getEvenNumbers);

function getEvenNumbers(num) {
    return num % 2 === 0;
}

console.log(evenNumbers);

const sumEvenNumbers = evenNumbers.reduce(function(a, b) {
    return a + b;
});

console.log(sumEvenNumbers);
