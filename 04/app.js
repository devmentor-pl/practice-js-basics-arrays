const years = [1980, 1934, 2002, 2019];
const thisYear = new Date().getFullYear();

const yearsGone = years.map(function(elem){
    return (thisYear - elem);
});

console.log(yearsGone);