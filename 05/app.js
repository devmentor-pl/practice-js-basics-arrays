const numbers = [1, 2, 3, 4, 5, 6, 7];

function sumEvenNumbers (arr) {
         return arr.filter(item => item % 2 === 0).reduce((totalSum, item) => totalSum + item);
        
}
console.log(sumEvenNumbers(numbers));