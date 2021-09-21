const numbers = [1, 2, 3, 4, 5, 6, 7];

numbers.filter(evenNumbers);
function evenNumbers(even){
    return even % 2 === 0;
}

numbers.reduce(getSum, 0);

function getSum(total, num) {
  return total + Math.round(num);}