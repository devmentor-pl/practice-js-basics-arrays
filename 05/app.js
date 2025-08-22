const numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNumbers = [];
sortEvenNumbers(numbers);

function sortEvenNumbers(num) {
    if(num % 2 === 0) {
        return evenNumbers;
    }
}

function getSum(arr) {
    let sum = 0;
    
    arr.forEach(function(i) {
        sum += i;
    }); 
    
    return sum;
}

evenNumbers = numbers.filter(sortEvenNumbers);
console.log(evenNumbers);

const sumEvenNumbers = getSum(evenNumbers);
console.log(sumEvenNumbers);