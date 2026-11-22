const numbers = [1, 2, 3, 4, 5, 6, 7];

const sum = numbers.filter((num) => {
  if(num % 2 === 0) {
    return num;
  }
}).reduce((acc, curr) => {
  return acc + curr;
});

const sum2 = numbers.filter(evenNumber).reduce(numberReduce);

const sum3 = numbers.filter((num) => num % 2 === 0).reduce((acc, cur) => acc + cur);

console.log('anonymous function => ' + sum);
console.log('callback => ' + sum2);
console.log('arrow function => ' + sum3);
console.log('😄')


function evenNumber(num) {
  if(num % 2 === 0) {
    return num;
  }
}

function numberReduce(firstNum, secondNum) {
  return firstNum + secondNum;
}