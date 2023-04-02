const n = Math.round(Math.random() * (100 - 1) + 0);
const oddNumbers = [];

for (let i = 0; i <= n; i++) {
  if (i % 2) oddNumbers.push(i);
}

console.log(oddNumbers);
