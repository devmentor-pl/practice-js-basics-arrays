const numbers = [1, 2, 3, 4, 5, 6, 7];

const sum = numbers
	.filter((num) => num % 2 === 0)
	.reduce((prev, curr) => curr + prev);

console.log(sum);
