const years = [1980, 1934, 2002, 2019];

const pastYears = years.map(getPastYears);
console.log(pastYears);

function getPastYears(element) {
    const currentYear = 2022
    const subYears = Number(currentYear) - Number(element);
    return subYears;
}