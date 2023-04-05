const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNum = numbers.filter(function(item){
        return item % 2 === 0;

}
)

console.log(evenNum);

const sum =  evenNum.reduce(function(add, cur){
    return add + cur
})

console.log(sum);