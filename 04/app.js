const years = [1980, 1934, 2002, 2019];

const currentYear = new Date().getFullYear();
let diffYears = years.map(function(pastYear) {
    return currentYear - pastYear;
})

diffYears.forEach( function(element) { console.log(element)});