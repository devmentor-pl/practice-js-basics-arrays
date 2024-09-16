const years = [1980, 1934, 2002, 2019];

let date =  new Date().getFullYear();

const yearsNewArr = years.map(year => date - year);

console.log(yearsNewArr);