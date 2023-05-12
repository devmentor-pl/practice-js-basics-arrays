const n = 100;
const oddNumbers = [];

getOddNumbers(n)
console.log(oddNumbers);


function getOddNumbers(n) {

    for (let i = 1; i <= n; i++) {
        if (i%2) {
            oddNumbers.push(i)
        }
    }
}



