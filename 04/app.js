const years = [1980, 1934, 2002, 2019];

const yearsPassed = years.map(countYearsPassed);
console.log(yearsPassed)

function countYearsPassed(element) {
  const currentYear = new Date().getFullYear();
  return currentYear - element;
}