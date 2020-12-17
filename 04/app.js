const years = [1980, 1934, 2002, 2019];
const currentlyYear = new Date().getFullYear();
const countedYears = years.map(countYears);

function countYears(element) {
    return currentlyYear - element;
}

console.log(countedYears);