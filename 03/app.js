const n = 24;

//pierwszy sposób
const oddNumbers = [];
for (let i=0; i<=n; i++) {
    if (i%2 === 1) {
        oddNumbers.push(i);
    }
}
console.log(oddNumbers);


//drugi sposób
const numbers = [];
for (let i=0; i<=n; i++) {
    numbers.push(i);
}
const oddNumbersTwo = numbers.filter(number => number%2 === 1)
console.log(oddNumbersTwo);




