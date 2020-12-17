const n = 100;
const oddNumbers = [];

const addOddNumber = function(n) {
    for(i= 0; i <= n; i++) {
        if(i % 2 !== 0) {
            oddNumbers.push(i);
        }
    }
        return oddNumbers;
}

console.log(addOddNumber(n));