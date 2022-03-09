const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(function(element){ if (!(element%2)) return element });
const sumEvenNum = evenNumbers.reduce(getSum,0);
console.log(evenNumbers);
console.log(sumEvenNum);


function getSum(total, numbers){
    return total + numbers;
}