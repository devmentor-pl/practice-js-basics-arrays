const years = [1980, 1934, 2002, 2019];

const actuallYear = 2023

const ages = years.map(function(item){
    return actuallYear - item
})

console.log(ages)