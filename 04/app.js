const years = [1980, 1934, 2002, 2019];

const currYear = (new Date()).getFullYear();
const ages = years.map(function(item) {
    return currYear - item;
});

console.log(ages);