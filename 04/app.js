const years = [1980, 1934, 2002, 2019];

const currentYear = (new Date()).getFullYear()

const time = years.map(function(year) {
    return currentYear - year
})

console.log(time)