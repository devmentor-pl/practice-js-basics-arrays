const years = [1980, 1934, 2002, 2019];

const pastYears = years.map(yearsCalculator);

function yearsCalculator(year) {
    return 2024 - year;
}

console.log(pastYears);