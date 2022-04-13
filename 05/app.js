const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(getEvenNumbers);

function getEvenNumbers(element) {
    return element % 2 === 0;
};

console.log(evenNumbers);

const sum = evenNumbers.reduce(getSum);

function getSum(total, num) {
    return total + num;
}

console.log(sum)
