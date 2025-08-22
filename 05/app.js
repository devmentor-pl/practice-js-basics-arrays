const numbers = [1, 2, 3, 4, 5, 6, 7];

// const sum = numbers.reduce((acc, el) => {
//     if(el%2===0){
//         return acc+el;
//     }
//        return acc;
//     }, 0);


// console.log(sum);


const evenNumbers = numbers.filter((element) => element%2===0);
const sum = evenNumbers.reduce((acc, el) => acc + el, 0);
console.log(sum);

