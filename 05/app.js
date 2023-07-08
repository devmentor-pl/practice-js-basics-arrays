const numbers = [1, 2, 3, 4, 5, 6, 7];
const evenSum = numbers.filter(getEvenSum);

function getEvenSum(num) {
  return num % 2 === 0;
}

const sumWithInitial = evenSum.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
});

console.log('wyjściowe:', numbers);
console.log('liczby parzyste:', evenSum);
console.log('suma liczb parzystych:', sumWithInitial);
