const years = [1980, 1934, 2002, 2019];

const passedYears = years.map(function(a, b) {
  const compared = years[++b];
  return Math.abs(a - compared);
});

console.log(passedYears);