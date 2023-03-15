const n = 24;
const oddNumbers = [];

for (let i = 0; i <= n; i++) {
    (i % 2 === 1) ? oddNumbers.push(i) : false;
}
console.log(oddNumbers)