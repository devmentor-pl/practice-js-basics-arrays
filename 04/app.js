const years = [1980, 1934, 2002, 2019];
const newYear = (new Date().getFullYear());

const yearsPassed = years.map((el) => {
    return newYear - el;
})

console.log(yearsPassed);
