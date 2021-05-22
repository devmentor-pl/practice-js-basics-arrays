const years = [1980, 1934, 2002, 2019];
const currentYear = 2021;

const timeGone = years.map(currentToYear)
console.log(timeGone);

function currentToYear(element) {
    return currentYear - element;
}