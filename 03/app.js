const n = 100;
const oddNumbers = [];

function addOddNumbers() {
  for (let i = 0; i <= n; i++) {
    if (i % 2 !== 0) {
      oddNumbers.push(i);
    }
  }
  console.log(oddNumbers);
}
addOddNumbers();
