const years = [1980, 1934, 2002, 2019];
const yearsToToday = years.map(toToday);

console.log(yearsToToday);

function toToday(element) {
    return 2022 - element;
}