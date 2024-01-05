const n = 51;
const oddNumbers = [];
fillArray();
console.log(oddNumbers);

function fillArray () {
  for (let i = 1; i <= n; i++) {
    if (!(i % 2 === 0)) {
      oddNumbers.push(i);
    }
  }
}