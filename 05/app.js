const numbers = [1, 2, 3, 4, 5, 6, 7];


const getSumOfEvenNumbers = numbers.filter( isEven ).reduce( function(a, b) {
    return a + b;
});

function isEven(number) {
    return number % 2 === 0;
}

console.log(getSumOfEvenNumbers)