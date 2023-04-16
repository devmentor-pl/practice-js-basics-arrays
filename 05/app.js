const numbers = [1, 2, 3, 4, 5, 6, 7];

//find all even numbers with .filter() method
const evenNumbers=numbers.filter(element=>(element%2) === 0);
console.log(evenNumbers);

//sum even numbers with .reduce() method
const initialValue = 0;
const sumArray = evenNumbers.reduce(
  (totalSum, sum) => totalSum + sum,
  initialValue
);

console.log(sumArray);
