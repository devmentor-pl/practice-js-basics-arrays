const years = [1980, 1934, 2002, 2019];

const currentYear = new Date().getFullYear();
console.log(currentYear);

const yearsPassed = years.map(function(year) {
    return currentYear - year;
});

console.log(yearsPassed);