const numbers = [1, 2, 3, 4, 5, 6, 7];
const sumEvenNumbers = numbers.filter(checkEvenNumbers).reduce(sumNumbers, 0);
console.log(sumEvenNumbers);

function checkEvenNumbers(number) {
	if (number % 2 === 0) {
		return true;
	}
	return false;
}

function sumNumbers(sum, el) {
	return sum + el;
}
