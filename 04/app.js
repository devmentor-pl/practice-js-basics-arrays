const years = [1980, 1934, 2002, 2019];
const currentYear = 2020;

const passedYearsArr = years.map((y) => {
    const passedTime = currentYear - y;
    return passedTime
});
console.log(passedYearsArr);