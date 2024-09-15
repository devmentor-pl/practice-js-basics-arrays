const years = [1980, 1934, 2002, 2019];
const pastYears = years.map(getPastYears)
console.log(pastYears)

function getPastYears(year) {
    const today = new Date();
    const currentYear = today.getFullYear();
    return currentYear - year
}