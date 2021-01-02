const numbers = [1, 2, 3, 4, 5, 6, 7];

const even = numbers.filter(isEven);
console.log(even);

// const even2 = numbers.filter(function(number) {
//     return number % 2 === 0;
// })
// console.log(even2);  
const sum = even.reduce(getSum);
console.log(sum);

function isEven(number) {
    return number % 2 === 0;
}

function getSum(total, num) {
    return total + num;
}