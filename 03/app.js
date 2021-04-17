const n = 24;
const oddNumbers = [];

const oddNumbers2 = getOddNumbers(n)
console.log(oddNumbers2)

function getOddNumbers(n) {
    const oddNumbers = [];
    for(let i = 0; i <= n; i++) {
        if(i % 2 !== 0) {
            oddNumbers.push(i);
        }
    }

    return oddNumbers;
}

