const years = [1980, 1934, 2002, 2019];
const currentYear = 2022;
const difference = years.map(function (element) {
    return currentYear - element;
});

console.log(difference);