const numbers = [1, 2, 3, 4, 5, 6, 7];

const oddNumbers = numbers.filter(function (element) {
    return element % 2 === 0;
});

const result = oddNumbers.reduce(function(previousValue, currentValue) {
    return previousValue + currentValue;
});

console.log(result);




// alternatywne wywołanie
console.log(numbers.filter(function (element) {
    return element % 2 === 0;
})
.reduce(function(previousValue, currentValue) {
    return previousValue + currentValue;
}));