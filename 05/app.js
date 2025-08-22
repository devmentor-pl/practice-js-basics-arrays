const numbers = [1, 2, 3, 4, 5, 6, 7];

const newNumbers = numbers
	.filter((el) => el % 2 === 0)
	.reduce((total, item) => (total += item), 0);

console.log(newNumbers);
