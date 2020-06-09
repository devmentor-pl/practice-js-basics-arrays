const n = 50;
const oddNumbers = [];


let checkOddNumbers = function () {


    for (let i = 0; i < n; i++) {
        if (i % 2 !== 0) {
            oddNumbers.push(i)
        }

    }
}
checkOddNumbers()
console.log(oddNumbers)