const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(findEvenNumbers).reduce(addNum);
console.log(evenNumbers);

function findEvenNumbers(num) {
    if (num % 2 === 0) {
        return num
    }
};

function addNum(sum, num) {
    return sum + num
};