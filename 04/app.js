const years = [1980, 1934, 2002, 2019];

const currentYear = (new Date()).getFullYear()

console.log(currentYear)

const ages = years.map(function(item, index) {
    return currentYear - item
})

console.log(ages)