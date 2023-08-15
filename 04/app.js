const years = [1980, 1934, 2002, 2019];

const d = new Date();
let currentYear = d.getFullYear();

const numberOfYears = years.map(function(item) {
    return currentYear - item;
});

console.log(numberOfYears);