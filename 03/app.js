const n = 100;
const oddNumbers = [];

let i = 1;
do {
	if (n === 0) {
		console.warn('Maximal value of array is too low');
	}
	if (i % 3 === 0 && i % 2 !== 0) {
		oddNumbers.push(i);
	}
	i++;
} while (i <= n);

console.log(oddNumbers);
