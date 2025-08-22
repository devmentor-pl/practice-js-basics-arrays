const n = 24;
const oddNumbers = [];

const getOddNumber = function (n) {
    for (i = 0; i <= n; i++) {
        if (i % 2 !== 0) {
            oddNumbers.push(i);
        }
    }
    return oddNumbers;
}

getOddNumber(n);
console.log(oddNumbers);