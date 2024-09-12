const years = [1980, 1934, 2002, 2019];

const currYear = (new Date().getFullYear())
const differenceYears = years.map(function(element) {
    return currYear - element;
});

console.log(differenceYears);