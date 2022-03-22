const numbers = [1, 2, 3, 4, 5, 6, 7];

let evenNumbers = numbers.filter(function (number) {

    return number % 2 === 0;

});


let sumOfEven = evenNumbers.reduce(function (previousValue, currentValue) {

    return previousValue + currentValue;

});

console.log(evenNumbers);
console.log(sumOfEven);