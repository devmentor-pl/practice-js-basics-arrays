const years = [1980, 1934, 2002, 2019];


function newYears(element) {
    const timeBetweenYears = new Date().getFullYear() - element;
    return timeBetweenYears;

}

const newYearsArray = years.map(newYears);

console.log(years);

console.log(newYearsArray);