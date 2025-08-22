const years = [1980, 1934, 2002, 2019];
const currentYear = 2021;
const yearsAgo = years.map( year => currentYear - year );

console.log(yearsAgo);
