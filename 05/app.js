const numbers = [1, 2, 3, 4, 5, 6, 7];
const evenNums = numbers.filter(getEven)
const sumEvens = evenNums.reduce(getSum)

console.log('Suma parzystych elementów: ' + sumEvens)

function getEven(num) {
    if (num % 2 === 0)
        return num
}
function getSum(sum, num) {
    return sum + num
}