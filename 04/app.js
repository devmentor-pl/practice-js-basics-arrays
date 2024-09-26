const years = [1980, 1934, 2002, 2019];
const today = new Date();
const currentYear = today.getFullYear();

const numberOfYears = years.map(year => currentYear - year);

console.log(numberOfYears);