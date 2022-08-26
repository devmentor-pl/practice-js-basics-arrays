const numbers = [1, 2, 3, 4, 5, 6, 7];
const sum = sumFunc();

const evenNumbers = numbers.filter(element => element % 2 === 0);
const sumOfEvenNumbers = evenNumbers.reduce(sumFunc);

console.log(evenNumbers);
console.log(sumOfEvenNumbers);


function sumFunc(acc, num){
    return acc + num;
}