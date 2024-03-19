const n = 24;
const oddNumbers = [];

for (i=0;i<=n;i++) {
    getOddNumbers(i);
}

console.log(oddNumbers);

function getOddNumbers(number) {
    if (number % 2 !== 0) {
        oddNumbers.push(number);
    }
}