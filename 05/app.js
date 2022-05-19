const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(isEven);

function isEven(element){
    return element % 2 === 0;
}

const sum = evenNumbers.reduce(function(total, amount,) {
    return total + amount;
  });

console.log(sum)
