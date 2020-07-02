const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
})
console.log(evenNumbers)


const getSum = arr => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
const sum = getSum(evenNumbers);
console.log(sum)