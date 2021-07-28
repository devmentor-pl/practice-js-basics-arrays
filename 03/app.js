const n = '24';
const oddNumbers = [];

for (let i = 1; i <= n; i++) {
    if (isOdd(i)) {
        oddNumbers.push(i);
    };
}

console.log(oddNumbers);

function isOdd(num) {
    if (num % 2 !== 0) {
        return true;
    }
    return false;
}