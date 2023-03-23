const n = 24;
const oddNumbers = [];

function addOddNumbersToArray(arr, number) {
    for(let i=1; i<=number; i++) {
        if(i % 2 !== 0) {
            arr.push(i)
        }
    }
    return arr
}

addOddNumbersToArray(oddNumbers, n);
console.log(oddNumbers);