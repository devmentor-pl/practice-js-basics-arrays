const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumber = numbers.filter(function(evenNum) {
    if (evenNum % 2 === 0) 
        return evenNum;
    });
console.log(evenNumber);

const sum = evenNumber.reduce(function(num1 ,num2) {
    return num1 + num2;
});

console.log(sum);
