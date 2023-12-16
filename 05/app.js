const numbers = [1, 2, 3, 4, 5, 6, 7];

const sumNumbers = numbers.filter(getNumbers);
console.log(sumNumbers);

const sumOfNumbers = sumNumbers.reduce(sumFilteredNum);
console.log(sumOfNumbers);

function getNumbers(elNumbers) {
    return elNumbers % 2 === 1;
}

function sumFilteredNum(tot, num) {
    return tot + num;
}