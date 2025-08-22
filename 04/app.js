const years = [1980, 1934, 2002, 2019]


// Actual year
const currentYear = (new Date()).getFullYear()
console.log('current year: ' + currentYear)


// anonymous function as param
const yearsPassed = years.map(function(year) {
    return currentYear - year
})
console.log(yearsPassed)


// named function as param
function newYears(year) {
    return currentYear - year
}

const yearsPassed2 = years.map(newYears)
console.log(yearsPassed2)


