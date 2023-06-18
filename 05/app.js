const numbers = [1, 2, 3, 4, 5, 6, 7];

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];



function isEven(number) {
  return number % 2 === 0;
}

const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

const sumOfEven = evenNumbers.reduce((accumulator, current) => {
  return accumulator + current
}, 0);

// let accumulator = 0;
// const sumOfEven = evenNumbers.reduce((accumulator, current) => accumulator + current);
// czy ten sposób tez jest ok, czy są jakie wskazania który lepszy, czytelniejszy ? 

console.log(sumOfEven);

