const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(function (element) {
  if (element % 2 === 0) {
    return true;
  };
});
console.log(evenNumbers);


const finalEvenNumbers = evenNumbers.reduce(function (acc, curr) {
  return acc + curr;
});

console.log(finalEvenNumbers);