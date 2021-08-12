const years = [1980, 1934, 2002, 2019];
const now = (new Date()).getFullYear();

const amountOfYears = years.map(year => now - year);

console.log(amountOfYears);
