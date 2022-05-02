const numbers = [1, 2, 3, 4, 5, 6, 7];
const evenNumbers = numbers.filter( (number) => {
	if (number % 2 === 0) {
		return number;
	} else {
		return false;
	}
});

const sum = evenNumbers.reduce(function (a, b) {
	return a + b;
});

console.log(sum);
