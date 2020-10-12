const numbers = [1, 2, 3, 4, 5, 6, 7];
const evenNumbersSum = numbers.filter(onlyEven).reduce(sum);
console.log(evenNumbersSum);


function onlyEven(element){
    return element%2===0;
}

function sum(a,b){
    return a+b;
}