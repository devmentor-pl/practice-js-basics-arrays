const n = 24;
const oddNumbers = [];

function fillUpArray() {
  for (let i = 0; i <= n; i++) {
      if (i % 2 !== 0) {
          oddNumbers.push(i)
      }
  }   
}
fillUpArray()
console.log(oddNumbers);
