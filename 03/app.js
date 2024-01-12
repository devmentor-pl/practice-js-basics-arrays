const n = 24;
const oddNumbers = getOddNumbers();
console.log(oddNumbers);

function getOddNumbers() {
  const oddNumbers = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      oddNumbers.push(i);
    }
  }
  return oddNumbers;
}
