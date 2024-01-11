const years = [1980, 1934, 2002, 2019];

const passedYears = years.map(function(a) {
  const year = 2024;
  return year - a;
});

console.log(passedYears);