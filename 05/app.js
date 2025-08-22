const numbers = [1, 2, 3, 4, 5, 6, 7];
const evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers);
const sumOfEvenNumbers = evenNumbers.reduce(sumReducer);
console.log(sumOfEvenNumbers);

function sumReducer(accumulator, currentValue) {
    return accumulator + currentValue;
}