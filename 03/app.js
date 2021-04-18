const n = 100;
const oddNumbers = [];

//first solution

for (let i = 1; i <= n; i = i + 2) {
    oddNumbers.push(i);
}

console.log('first solution: ' + oddNumbers)

//second solution

const oddNumbers2 = [];

for (let i = 0; i <= n; i++) {
    if (i % 2 == 1) {
        oddNumbers2.push(i);
    }
}

console.log('second solution: ' + oddNumbers2)