const numbers = [1, 2, 3, 4, 5, 6, 7]

const evenNumbers = numbers.filter(element => {
	return element % 2 !== 0
})

const sumOfEvenNumbers = evenNumbers.reduce((element, nextElement) => element + nextElement)

console.log(evenNumbers)
console.log(sumOfEvenNumbers)
