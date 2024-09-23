const numbers = [1, 2, 3, 4, 5, 6, 7];

const onlyEvenNumber = numbers.filter(number => number % 2 === 0);
const sum = onlyEvenNumber.reduce((number, currentValue) => number + currentValue, 0);
console.log(sum);