const n = 24;
const oddNumbers = [];
console.log(oddNumbers);

for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
        oddNumbers.push(i);
    }
}

console.log(oddNumbers);