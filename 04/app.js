const years = [1980, 1934, 2002, 2019];
const currentYear = (new Date().getFullYear());

const yearsGone = years.map(function(el){
    return currentYear - el;
})

console.log(yearsGone);