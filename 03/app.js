const n = 24;
const oddNumbers = [];

for (let i = 0; i <= n; i++) {
  if (i % 2 === 1) {
    oddNumbers.push(i);
  }
}

console.log(oddNumbers);
