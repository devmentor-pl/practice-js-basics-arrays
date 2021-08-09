const n = 24;
const oddNumbers = [];

// 1.
/*
for (let i = 0; i <= n; i++) {
	if (i % 2 !== 0) {
		oddNumbers.push(i);
	}
}
*/

// 2.

for (let i = 1; i <= n; i += 2) {
	oddNumbers.push(i);
}

// 3.

/*
const oddNumberss = n =>
	new Array(n)
		.fill(0)
		.map((el, i) => (el += i))
		.filter(el => el % 2 !== 0);
*/

// console.log(oddNumberss(n));

console.log(oddNumbers);
