const n = 100;
const oddNumbers = getOddNumbers(n);

console.log(oddNumbers);

function getOddNumbers(n) {
    const temp = []
    for (let i = 1; i <= n; i++) {
        if (i % 2) {
            temp.push(i)
        }
    }
    return temp
}



