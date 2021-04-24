const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

//solution without .filter() and .reduce() ---------------------------------------------------------------------

let sumEvenNumbers = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        sumEvenNumbers = sumEvenNumbers + numbers[i];
    }
}

console.log('solution without .filter() and .reduce(): ' + sumEvenNumbers)


//solution with .filter() and .reduce() -------------------------------------------------------------------------

function evenNumbers(number) {
    if (number % 2 == 0) {
        return number;
    }
}

function sumNumbers(a, b) {
    return a + b;
}

let filtered = numbers.filter(evenNumbers);
console.log(filtered)

let total = filtered.reduce(sumNumbers);
console.log('solution with .filter() and .reduce(): ' + total)

