const numbers = [1, 2, 3, 4, 5, 6, 7];

const numbersEven = numbers.filter(checkEven);

let total = numbersEven.reduce(function(a, b) {
    return a + b;
})

console.log(numbersEven);
console.log(total);



function checkEven(numbers) {
    return numbers % 2 ===0;
}

