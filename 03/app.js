const n = 24;
const oddNumbers = [];

for (i=0; i<=n; i=i+1) {
    if(i % 2 === 1) {
    console.log(i)
    oddNumbers.push(i)
}
}

console.log(oddNumbers)