const years = [1980, 1934, 2002, 2019];
const date = new Date();
const yearNow = date.getFullYear();

const yearsToNow = years.map(function (item) {
    const timeFrom = yearNow - item;
    return timeFrom;
})

console.log(yearsToNow);

