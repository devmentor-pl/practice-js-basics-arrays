const n = 24;
const oddNumbers = [];

function oddNumbersSeries(n) {
	for (let i = 1; i < n; i++) {
		if (i % 2 !== 0) {
			oddNumbers.push(i);
		}
	}
	return oddNumbers;
}

console.log(oddNumbersSeries(n));