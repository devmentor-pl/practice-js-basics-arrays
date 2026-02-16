const n = 24;
const oddNumbers = [];

for (let i = 1; i <= n; i++) {
	if (i % 2) {
		oddNumbers.push(i);
	}
}

console.log(oddNumbers);
console.log('długość tablicy:', oddNumbers.length);
