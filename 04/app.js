const years = [1980, 1934, 2002, 2019];

const passedYears = years.map(function (el) {
  return 2025 - el;
});
console.log(passedYears);
