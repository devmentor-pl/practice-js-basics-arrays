const numbers = [1, 2, 3, 4, 5, 6, 7];


const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers);

function isEven(num){
    return num % 2 === 0;
};

const sum = evenNumbers.reduce(function(acc, curr){
    return acc + curr;
})

console.log(sum);