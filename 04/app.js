const years = [1980, 1934, 2002, 2019];
const difference = years.map(function(oldYear) {
    const currentYear = new Date().getFullYear();
    return currentYear - oldYear;
})
console.log(difference);
