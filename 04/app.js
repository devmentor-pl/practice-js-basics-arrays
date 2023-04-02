const years = [1980, 1934, 2002, 2019];
const actualYear = new Date().getFullYear();

const pastYears = years.map(function (year) {
  return actualYear - year;
});

console.log(pastYears);
