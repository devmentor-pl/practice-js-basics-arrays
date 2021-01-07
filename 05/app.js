const numbers = [1, 2, 3, 4, 5, 6, 7];

function even(number) {
    return number % 2 === 0;
}

var evenNumbers = numbers.filter(even);
console.log(evenNumbers);



const evenTotal = sumEven(numbers);
function sumEven(score) {
    return score.filter(even).reduce(function(a, b) {
        return a + b})
  }


console.log(evenTotal)