// const n = 0;
// const n = 1;
const n = 100;
const oddNumbers = [];
console.log(addOddNumbers(n));

function addOddNumbers(max) {
	while (oddNumbers.length < max) {
		let randomNumber = Math.round(Math.random() * max);
		if (randomNumber % 2 !== 0) {
			oddNumbers.push(randomNumber);
		}
	}
	return oddNumbers;
}
