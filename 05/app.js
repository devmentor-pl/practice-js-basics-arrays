const numbers = [1, 2, 3, 4, 5, 6, 7]

const evenNumbers = numbers.filter(function (el) {
	if (el % 2 === 0) {
		return el
	}
})

const sumEvenNumbers = evenNumbers.reduce(function (a, b) {
	return a + b
})
console.log(sumEvenNumbers)
