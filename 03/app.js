const n = 11;
const oddNumbers = [];

for (let i = 1; i <= n; i++) {
    if (i % 2) {
        oddNumbers.push(i);
    }
}

console.log(oddNumbers);