const years = [1980, 1934, 2002, 2019];

const newYears = years.map(yearsDifference);
console.log(newYears);

function yearsDifference(element) {
    const presentYear = new Date();
    return (presentYear.getFullYear() - element);
}