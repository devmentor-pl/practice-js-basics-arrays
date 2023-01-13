const numbers = [1, 2, 3, 4, 5, 6, 7];

const filteredNumbers = numbers.filter(getOddNumbers);
console.log(filteredNumbers);

const sumOfOddNumbers = filteredNumbers.reduce(sumFilteredNumbers);
console.log(sumOfOddNumbers);

function getOddNumbers(element) {
	return element % 2 === 1;
}

function sumFilteredNumbers(total, num) {
	return total + num;
}
