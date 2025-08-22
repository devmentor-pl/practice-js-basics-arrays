const numbers = [1, 2, 3, 4, 5, 6, 7];
const evenNumbers = numbers.filter((number) => {
    if(number % 2 === 0){
        return number;
    }
})

const sum  = evenNumbers.reduce(function(prevValue, currentValue){
    return prevValue + currentValue;
});

console.log(sum)