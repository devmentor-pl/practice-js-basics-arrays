const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(getEvenNumbers);
console.log(evenNumbers);
const sum = evenNumbers.reduce(addition);
console.log(sum);


function getEvenNumbers(num) {
    return (num % 2 === 0);
}

function addition(total, value) {
    return total + value;
}

