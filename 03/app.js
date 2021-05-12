const n = 24;
const oddNumbers = [];
// z użyciem pętli for
function pushToArray(num, arr){
        for(let i = 1; i <= num; i++){
                if(i % 2 !== 0){
                   arr.push(i);     
                }
        }
        return arr
}

console.log(pushToArray(n, oddNumbers));