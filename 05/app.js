const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbersArr = numbers.filter(n => {
    if ( n % 2 === 0) {
        return n
    }
})

const sumOfNumbers = evenNumbersArr.reduce((acc, value) => {
 return acc + value
})