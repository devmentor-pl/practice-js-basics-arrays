const n = 100;
const oddNumbers = [];

for(let i = 0; i <= n; i++){
    if( i > 0 && i % 2 ===1){
        oddNumbers.push(i);
    }
}

console.log(oddNumbers);