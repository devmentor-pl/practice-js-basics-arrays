const numbers = [1, 2, 3, 4, 5, 6, 7];
const evenSumNumbers = numbers
	.filter(function (e) {
		return !(e % 2);
	})
	.reduce(function (sum, e) {
		return sum + e;
	});
console.log(evenSumNumbers);
