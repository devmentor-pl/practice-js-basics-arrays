const years = [1980, 1934, 2002, 2019];
currentYear = (new Date).getFullYear();
console.log(currentYear);

const yearsPassed = years.map(function(element) {
    return currentYear - element;
});

console.log(yearsPassed);