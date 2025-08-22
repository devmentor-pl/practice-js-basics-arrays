const numbers = [1, 2, 3, 4, 5, 6, 7];
// const evenNumbers = numbers.filter();

let evenNumbers = numbers.filter((number) => number % 2 == 0);
console.log(evenNumbers);

let sum = evenNumbers.reduce((previousValue, currentValue) => {
	return previousValue + currentValue;
});
console.log(sum);
