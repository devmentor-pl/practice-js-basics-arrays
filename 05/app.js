const numbers = [1, 2, 3, 4, 5, 6, 7];

const result = numbers.filter(isEven);
const resultSum = result.reduce(addSum);
console.log("Suma wszystkich liczb parzystych z tablicy: " + resultSum);

function isEven(value){
    return value % 2 === 0;
}

function addSum(total, value){
    return total + value;
}