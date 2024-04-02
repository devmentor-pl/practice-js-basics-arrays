const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(`Parzyste liczby: ${evenNumbers}`);

const sumEven = evenNumbers.reduce((acc, curr) => acc + curr);

console.log(`Suma wszystkich parzystych liczb: ${sumEven}`);
