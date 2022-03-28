const n = 24;
const oddNumbers = [];

let i = 0
while (i < n) {
    const randomNumber = Math.round(Math.random() * 100)
    if (randomNumber % 2 !== 0) {
        console.log(i, randomNumber, 'okey added')
        oddNumbers.push(randomNumber)
        i++
    } else {
        console.log(i, randomNumber, 'fail')
    }
}

console.log(oddNumbers)



