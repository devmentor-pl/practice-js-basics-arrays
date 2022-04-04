const numbers = [1, 2, 3, 4, 5, 6, 7];

const newNumbers=numbers.filter(number =>number % 2 ===0)
.reduce((prev ,curr)=>{
    return prev+curr;
},0)
console.log(newNumbers);

