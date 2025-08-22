const years = [1980, 1934, 2002, 2019];

const currYear = (new Date()).getFullYear();
console.log(currYear);
const ages = years.map(function(item, index){
    return currYear - item;
});

console.log(ages);