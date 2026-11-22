const years = [1980, 1934, 2002, 2019];
const currentYear = new Date().getFullYear();
console.log(currentYear);

const firstYear = years.map(function(el, i, arr) {
  const fYear = currentYear - el;
  return fYear;
})

console.log(firstYear);
console.log(firstYear[0]);
