const years = [1980, 1934, 2002, 2019];

const NumberOfYears = years.map(CalculateYears);
console.log(NumberOfYears);

function CalculateYears(element) {
  return 2022 - element;
}
