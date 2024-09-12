const n = 24;
const oddNumbers = [];

for(i=1; i<=n; i++) {
    if(i % 2 === 1) {
        oddNumbers.push(i);
    }
}

console.log(oddNumbers);