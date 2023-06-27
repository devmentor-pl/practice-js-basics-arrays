const n = 24;
const oddNumbers = [];

function pushOddNumbers(n) {
    let element = 0;
    for (let i = 1; i <= n; i++) {
        element++;
        oddNumbers.push(element);
    }
    console.log(oddNumbers);
}
pushOddNumbers(n);