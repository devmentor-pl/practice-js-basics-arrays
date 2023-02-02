const years = [1980, 1934, 2002, 2019];
const currentYear = 2023;
const newArr = years.map(reduce);

function reduce(element) {
  let newNumber = currentYear - element;

  return newNumber;
}

console.log(newArr);
