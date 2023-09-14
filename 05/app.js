const numbers = [1, 2, 3, 4, 5, 6, 7];

const filterArr = numbers.filter(function(num) {return num % 2 === 0});
const sumOfFilterArr = filterArr.reduce(function(total, num) {return total + num});
console.log(filterArr);
console.log(sumOfFilterArr);
