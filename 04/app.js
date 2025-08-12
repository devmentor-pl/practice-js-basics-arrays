const years = [1980, 1934, 2002, 2019];
const presentYear = 2025;
const yearsDiff = years.map(diffBetweenYears);
console.log(yearsDiff);


function diffBetweenYears(element) {
    return presentYear - element;
}