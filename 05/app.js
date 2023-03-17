const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(function(num) {
    if (!(num % 2)) {
        return numbers;
    }
});

console.log(evenNumbers);

const initialValue = 0;

const sumEvenNumbers = evenNumbers.reduce(function(accumulator, currentValue) {  
    return accumulator + currentValue;
});

console.log(sumEvenNumbers);



