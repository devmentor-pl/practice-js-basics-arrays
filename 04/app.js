const years = [1980, 1934, 2002, 2019];
let currentDate = new Date();
let currentYear = currentDate.getFullYear();

const yearsArr = years.map(numberOfYears);
console.log(yearsArr);

function numberOfYears(element) {
  return currentYear - element;
}
