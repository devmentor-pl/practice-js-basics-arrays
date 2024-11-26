const n = 24;
const oddNumbers = [];

// for (let i = 0; i < n; i++){
//     if(i%2 !== 0) {
//         oddNumbers.push(i);
//     }
// }
// console.log(oddNumbers);

function showOddNumbers(maxValue){
    let arr = [];

    for (let i = 0; i < maxValue; i++){
        if(i%2 !== 0) {
            arr.push(i);
        }
    }
    console.log(arr);
}

showOddNumbers(n);