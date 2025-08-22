const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(function(item){
    return item % 2 === 0;
});

console.log(evenNumbers);

const sum = evenNumbers.reduce(function(a,b){
    return a + b;
});

console.log(sum);