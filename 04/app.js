const years = [1980, 1934, 2002, 2019];


const yearsPeriod = years.map(timePeriod);
console.log(yearsPeriod);

function timePeriod(item) {
    return 2024 - item;
}