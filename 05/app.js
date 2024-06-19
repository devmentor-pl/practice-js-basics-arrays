const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(function(number) {return number % 2 === 0});
let sum = evenNumbers.reduce(function(accumulator, current) {
    return accumulator + current;
});

console.log(sum);