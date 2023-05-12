const years = [1980, 1934, 2002, 2019];
const currentDate = new Date().getFullYear()

const yearsResult = countYears(years, currentDate)
console.log(yearsResult);

function countYears(yrs, currentYr) {
    const newArr = yrs.map(function (yr) { return currentYr - yr })
    return newArr
}

