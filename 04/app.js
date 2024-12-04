const years = [1980, 1934, 2002, 2019];

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const yearsToDate = years.map((element) => currentYear - element);
console.log(yearsToDate);
