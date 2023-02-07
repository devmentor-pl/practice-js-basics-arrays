const years = [1980, 1934, 2002, 2019];

const newYears = years.map(substraction);
console.log(newYears);

function substraction(el) {
    return 2023 - el;
};