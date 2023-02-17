const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenItem = numbers.filter(checkNumbers);

function checkNumbers(numbers){
    return numbers%2===0;

}

console.log(evenItem);

const sum = evenItem.reduce(function(acc, curr){
    return acc + curr ;
})
console.log(sum);