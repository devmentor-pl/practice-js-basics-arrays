const years = [1980, 1934, 2002, 2019];

const currentDate = new Date();
let currentYear = parseInt(currentDate.getFullYear());
console.log(currentYear);

const yearsToToday = years.map(function(num) {
    return currentYear - num;
});

console.log(yearsToToday);