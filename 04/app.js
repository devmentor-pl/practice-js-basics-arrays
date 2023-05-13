const years = [1980, 1934, 2002, 2019];

const yearsResult = countYears(years)
console.log(yearsResult);

function countYears(yrs) {
    const currentYear = new Date().getFullYear()

    const newArr = yrs.map(function (yr) { return currentYear - yr })
    return newArr
}

