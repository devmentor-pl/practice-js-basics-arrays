const numbers = [1, 2, 3, 4, 5, 6, 7];


const sumEvenNumbers = numbers.filter( isEven ).reduce( function(a, b) {

    return a + b;
});


console.log(sumEvenNumbers)



function isEven(num) {
    return num%2 === 0;
}