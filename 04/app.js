const years = [1980, 1934, 2002, 2019];
const currentYear = (new Date()).getFullYear();

const ages = years.map(function(item){
    return currentYear - item;
});
console.log(ages);