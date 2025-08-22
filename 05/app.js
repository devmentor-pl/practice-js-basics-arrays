const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers);

const evenNumbers = numbers.filter(function(item){
    return item % 2 === 0;
});

console.log(evenNumbers);


const sum = evenNumbers.reduce(function(acc, curr){
    return acc + curr;
});

console.log(sum);