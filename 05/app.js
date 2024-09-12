//filter 
function()
const numbers = [1, 2, 3, 4, 5, 6, 7];
const result = odd.filter(getOddNumbers);

function getOddNumbers(num) {
    return num % 2 !== 0;
}

//lub 
const numbers = [1, 2, 3, 4, 5, 6, 7];
const oddNumbers = odd.filter(function(item) {
    return item[1] !== 2;
});
console.log(oddNumbers)

//reduce()
let arr = [1, 2, 3, 4, 5, 6, 7];

let result = arr.reduce((accumulator, currentValue) => {
  if (currentValue % 2 > 0) {
    return accumulator + currentValue;
  } else {
    return accumulator
  }
});

console.log(result);







