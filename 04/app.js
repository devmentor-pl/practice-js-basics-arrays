const years = [1980, 1934, 2002, 2019];

const numberOfYears = years.map(calculateYears);
console.log(numberOfYears);

function calculateYears(element) {
  return 2022 - element;
}
