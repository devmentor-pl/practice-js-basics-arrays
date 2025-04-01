const years = [1980, 1934, 2002, 2019];

const yearsPasst = years.map(function (year) {
  return new Date().getFullYear() - year;
});

console.log(yearsPasst);
