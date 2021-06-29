const years = [1980, 1934, 2002, 2019];
const thisYear = 2021;

const difYears = years.map(showDifYears);
function showDifYears(element) {
    return thisYear - element; 
}
