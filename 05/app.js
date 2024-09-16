const numbers = [1, 2, 3, 4, 5, 6, 7];
const evenNumbers = numbers.filter(getEven);
const evenSum = evenNumbers.reduce(getSum) 

console.log(evenSum);

function getEven(item) {
    return item%2===0;
}

function getSum(accumulator, item) {
    return accumulator + item;
}