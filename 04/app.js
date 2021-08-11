const years = [1980, 1934, 2002, 2019];
const actualYear = 2021;

const diffBetweenYears = years.map(function (el) {
  return actualYear - el;
});

console.log(diffBetweenYears);
