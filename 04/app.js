const years = [1980, 1934, 2002, 2019];

const date = new Date();
let year = date.getFullYear();

const timePeriod = years.map( function(item) {
    return year - item;
})

console.log(timePeriod);