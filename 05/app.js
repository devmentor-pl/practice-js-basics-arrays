const numbers = [1, 2, 3, 4, 5, 6, 7];


const evenNumbers = numbers.filter(function(value) {
    return value % 2 === 0;
});

const sumEvenNumbers = evenNumbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sumEvenNumbers);
