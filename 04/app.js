const years = [1980, 1934, 2002, 2019]

const subtractYears = function (year) {
    return years.map(function (element) {
        return Math.abs(year - element)
    })
}

const getYearsResult = subtractYears(2000)

console.log(getYearsResult)