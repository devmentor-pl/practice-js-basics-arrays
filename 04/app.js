const years = [1980, 1934, 2002, 2019];
const year = 2023;
const ages = years.map(function(item) {
    return year - item;
})

console.log(ages);