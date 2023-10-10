const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(function(number){
    return number % 2 === 0;
}
)
console.log(evenNumbers);
const sum = evenNumbers.reduce((num1, num2) => num1+ num2);

console.log(sum);