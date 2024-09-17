const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumSum = numbers.filter(num =>{
    return num % 2 === 0;
}).reduce((a,b)=> a+b);

console.log(evenNumSum);