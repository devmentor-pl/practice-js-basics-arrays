const numbers = [1, 2, 3, 4, 5, 6, 7];

// 1.

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] % 2 === 0) sum += numbers[i];
}

// 2.

const numbersSum = numbers =>
	numbers
		.filter(number => number % 2 === 0)
		.reduce((prev, next) => (prev += next), 0);

        
console.log(numbersSum(numbers));

console.log(sum);
