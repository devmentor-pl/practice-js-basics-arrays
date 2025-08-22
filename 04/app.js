const years = [1980, 1934, 2002, 2019];
const date = new Date();
const currentYear = date.getFullYear();
const elapsedYears = years.map(function(element){ return currentYear - element; });

console.log(elapsedYears);
