const years = [1980, 1934, 2002, 2019];
const now = new Date;

const timeDifference = years.map(deltaYears)

function deltaYears(oldYear) {
    return now.getFullYear() - oldYear;
}

console.log(timeDifference);