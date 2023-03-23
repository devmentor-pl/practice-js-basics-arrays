const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});

console.log('parzyste numery z tablicy =>');
console.log(evenNumbers);

const sumOfEvenNumbers = evenNumbers.reduce(function(a, b) {
    return a + b;
});

console.log('suma parzystych numerów => ');
console.log(sumOfEvenNumbers);