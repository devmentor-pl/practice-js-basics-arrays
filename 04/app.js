const years = [1980, 1934, 2002, 2019];
const currentYear=new Date().getFullYear();
let countYears;
// years = new Map();

// const map1 = array1.map(x => x * 2);

const howManyYears = years.map(element => currentYear - element);

console.log(howManyYears);



