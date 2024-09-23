const years = [1980, 1934, 2002, 2019];
const now = new Date().getFullYear();

const newYears = years.map(years => now - years);
console.log(newYears)
