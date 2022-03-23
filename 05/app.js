const numbers = [1, 2, 3, 4, 5, 6, 7];
const evenSumNumbers = numbers.filter(function (el) {
    return !(el % 2);
}).reduce(function (acc, el) {
    return acc + el;
});

console.log(evenSumNumbers);