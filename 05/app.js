const numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNumbers = [];
let totalEvenNumbers = 0;

evenNumbers = numbers.filter(isEven);
totalEvenNumbers = evenNumbers.reduce(function(sum, number) { return sum + number}, 0);
console.log('Suma wszystkich liczb parzystych wynosi: '+totalEvenNumbers);

function isEven(number) {
    if (number % 2 ===0) {
        return number;
    }
}