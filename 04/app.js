const years = [1980, 1934, 2002, 2019];

function checkYears() {
  const actualYear = new Date().getFullYear();
  const diffYears = years.map((yr) => actualYear - yr);
  return diffYears;
}
// console.log(checkYears());

const diffYears = checkYears();
console.log(diffYears);
