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


console.log('------ filter & reduce ------')

const filterNumbers = numbers.filter(item => item % 2 === 0)
console.log(filterNumbers)

const reduceNumbersEven = filterNumbers.reduce((prev, next) => prev + next, 0)
console.log(reduceNumbersEven)





