const numbers = [1, 2, 3, 4, 5, 6, 7];



const evenNum = numbers.filter((n) => {
        return n % 2 == 0;
    }
)

console.log(evenNum);


 let sum = evenNum.reduce((first, last) => {return first +=last} )

console.log(sum);