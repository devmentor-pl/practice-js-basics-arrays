const years = [1980, 1934, 2002, 2019];

const currYear = new Date().getFullYear();

const newArr = years.map(year => currYear - year);

console.log(newArr);
