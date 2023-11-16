const years = [1980, 1934, 2002, 2019];

const subYears = years.map(element => {
  return (new Date).getFullYear() - element;
});

console.log(subYears);