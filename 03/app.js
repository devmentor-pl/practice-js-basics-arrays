const n = 24;
const oddNumbers = [];

function findRandomOddNumberInGivenRange(range) {
    let number = 0;
    while((number % 2 === 0)) {
        number = Math.round(Math.random() * range)
    }
    return number
}

for(let i = 0; i < n; i++) {
    const number = findRandomOddNumberInGivenRange(n)
    oddNumbers.push(number)
    console.log(oddNumbers[i])
}

