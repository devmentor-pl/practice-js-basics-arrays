const n = 24;
const oddNumbers = [];

fillArray(oddNumbers);

console.log(oddNumbers);

function fillArray(array){
    for(let i=0; i<=n; i++){
        if(i%2!==0){
          array.push(i);
        }
    }
}
