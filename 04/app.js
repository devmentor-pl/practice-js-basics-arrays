const years = [1980, 1934, 2002, 2019];

const onlyEvenNumber = years.filter(number => number % 2 === 0);
const sum = onlyEvenNumber.reduce((number, currentValue) => number + currentValue, 0);
console.log(sum);