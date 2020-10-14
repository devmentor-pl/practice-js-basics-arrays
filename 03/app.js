const n = 24;


const filledArray = fillArrayWithOdd();

console.log(filledArray);

function fillArrayWithOdd() {
  let oddNumbers = [];
  for (let i = 0; i <= n; i++) {
    if (i % 2 !== 0) {
      oddNumbers.push(i);
    }
  }
  return oddNumbers;
}