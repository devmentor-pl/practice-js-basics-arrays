const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter((element) => {
    element = element % 2 === 0;
    return element;
});

const initialValue = 0;
const sumEvenNumbers = evenNumbers.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);
  
console.log(sumEvenNumbers);