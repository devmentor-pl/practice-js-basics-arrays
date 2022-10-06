// const n = 24;
// const oddNumbers = [];

// function getOddNumbers() {
//     for(let i=1; i<n; i++) {
//         if(isOdd(i)) {
//             oddNumbers.push(i); 
//         }
//     } return oddNumbers;
// }
// function isOdd(i) {
//     if(i % 2 === 0) {
//         return false
//     } else {
//         return true
//     } 
// }
// getOddNumbers() 
// console.log(oddNumbers)

// lub 

const n = 24;
const oddNumbers = [];

function getOddNumbers() {
    for(let i=1; i<n; i++) {
        if(i % 2 !== 0) {
            oddNumbers.push(i); 
        }
    } return oddNumbers;
}

getOddNumbers() 
console.log(oddNumbers)




