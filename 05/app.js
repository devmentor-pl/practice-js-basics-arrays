const numbers = [1, 2, 3, 4, 5, 6, 7];

const sumOfEvenNumbers = numbers.filter(element => element % 2 === 0 /* !(element % 2) taki też może być zapis*/ ).reduce((prev, curr) => prev + curr);

console.log(sumOfEvenNumbers);