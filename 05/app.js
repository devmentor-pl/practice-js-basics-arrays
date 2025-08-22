const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(function (element) {
    return element % 2 === 0;
});

console.log(evenNumbers);

const sumNumber = evenNumbers.reduce(function (total, currentValue) {
    return total + currentValue;
})

console.log(sumNumber)