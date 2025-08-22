const years = [1980, 1934, 2002, 2019];
const currYear = new Date().getFullYear();

function calcYears(element) {
  return currYear - element;
}

const howLongAgo = years.map(calcYears);
console.log(howLongAgo);
