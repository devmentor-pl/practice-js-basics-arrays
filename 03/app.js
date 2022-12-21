const n = 100;
const oddNumbers = [];

for (let i = 1; i <= n; i++) {
    if (!(i % 2 === 0)) {
        oddNumbers.push(i);
    }
}

console.log(oddNumbers);
