const numbers = [1, 2, 3, 4, 5, 6, 7];

const even = numbers.filter(isEven);
const sum = even.reduce(function (total, currentValue) {
  return total + currentValue;
}, 0);
const sumOfEvenNumbers = numbers
  .filter(isEven)
  .reduce(function (total, currentValue) {
    return total + currentValue;
  }, 0);
console.log("suma", sum);
console.log("sumOfEvenNumbers: ", sum);
function isEven(number) {
  return number % 2 === 0;
}
