const years = [1980, 1934, 2002, 2019];
const currentYear = new Date().getFullYear();

const pastYears = years.map((year) => currentYear - year);

console.log(pastYears);
