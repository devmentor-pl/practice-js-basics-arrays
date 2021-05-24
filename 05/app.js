const numbers = [1, 2, 3, 4, 5, 6, 7];
let sum ;


function showEvenNumbers(a) {

    if (a % 2 === 0) {
        return a;
    }
}

let result = numbers
    .filter(showEvenNumbers)
    .reduce((a, b) => a + b)
console.log(result)



