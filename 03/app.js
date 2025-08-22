const n = 24;
const oddNumbers = [];
const allNumbers = Array.from(Array(n).keys());

allNumbers.forEach((el) => {
	if (el % 2 !== 0) {
		oddNumbers.push(el);
	}
});
console.log(allNumbers);
console.log(oddNumbers);
