const numbers = [1, 2, 3, 4, 5, 6, 7];


const evenNumbers = numbers.filter(function(number){
    return number%2===0
})

console.log(evenNumbers)

const sum = evenNumbers.reduce(function(total,value){
    return total + value
})
console.log(sum)