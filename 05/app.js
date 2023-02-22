const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = (evenNumber) => {
  return evenNumber % 2 == 0;
};

const add = (result, el) => {
  return result + el;
};

const filterArray = numbers.filter(evenNumbers);
const reduceArray = filterArray.reduce(add);

console.log(filterArray);
console.log(reduceArray);
