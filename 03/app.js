const n = 100;
const oddNumbers = [];

const fullArray = function(n) {
    const allNumbers = [];
    for(let i =0; i <= n; i++) {
        allNumbers.push(i);
    }
     return allNumbers;
}

const onlyOddNumbers = function(n) {
    const allNumbers = fullArray(n);
    for(let j = 0; j < allNumbers.length; j++) {
        if(allNumbers[j] % 2 !== 0) {
            oddNumbers.push(allNumbers[j]);
        }
    }
    console.log(oddNumbers);
}

onlyOddNumbers(n);