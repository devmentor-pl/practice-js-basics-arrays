const numbers = [1, 2, 3, 4, 5, 6, 7];


const evenNumbers = numbers.filter(getEvenNumbers);

const result = evenNumbers.reduce(addElements);

console.log(result);

function getEvenNumbers(number) {
    return !(number % 2);
}

function addElements(total, num) {
    return total + num;
}