const numbers = [1, 2, 3, 4, 5, 6, 7];
const evenNumbers = numbers.filter(function (number) {
    if (number % 2 === 0) {
        return number;
    }
});

console.log(evenNumbers);

const sum = evenNumbers.reduce(function (previousNum, currentNum) {
    return previousNum + currentNum;
});

console.log(sum);