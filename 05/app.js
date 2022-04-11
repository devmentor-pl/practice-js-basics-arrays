const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0
})

console.log(evenNumbers)

const sum = evenNumbers.reduce(function(acc, curr){
    return acc+curr
})

console.log(sum)