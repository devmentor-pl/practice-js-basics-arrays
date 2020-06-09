const numbers = [1, 2, 3, 4, 5, 6, 7];
let sum;


const showEvenNumbers = function (num) {

    if (num % 2 === 0) {
        return num;
    }
}

// const addEvenNumbers = numbers.reduce((acc, num) => {
//     return acc + num;
// });


let result = numbers
    .filter(showEvenNumbers)
    .reduce((acc, num) => acc + num)
console.log(result)