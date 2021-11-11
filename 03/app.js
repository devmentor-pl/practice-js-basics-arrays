const n = 24;
const oddNumbers = [];
const resultArray = addCheckNumbers(oddNumbers);
console.log(resultArray);



function addCheckNumbers(array){
    for(let i=1;i<=n; i++){
        if(i % 2 !== 0){
            array.push(i);
        }
    }return array;
}


