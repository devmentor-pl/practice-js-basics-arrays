const numbers = [1, 2, 3, 4, 5, 6, 7]
console.log(numbers)


console.log('------ for ------')
function sumNumbers(numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] % 2 === 0) {
            sum += numbers[i]
        }
    }
    return sum
}
console.log(sumNumbers(numbers))


console.log('------ filter ------')
function sumByFilter(numbers) {
    let sum = 0
    numbers.filter(function(item) {
        sum+= (item % 2 === 0) ? item : 0
    })
    return sum
}
console.log(sumByFilter(numbers))


console.log('------ reduce ------')
function sumByReduce(numbers) {
    let sum = 0
    sum = numbers.reduce(function(cur, next) {
        nextEven = next % 2 === 0 ? next : 0
        return cur + nextEven
    }, 0)
    return sum
}
console.log(sumByReduce(numbers))




