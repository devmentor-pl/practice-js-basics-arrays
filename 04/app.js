const years = [1980, 1934, 2002, 2019];
const currentYear = 2023;

const newYears = years.map(showTimeLapse);
console.log(newYears);

function showTimeLapse(year) {
    let howMuchTime = 0;
    howMuchTime = currentYear - year; 

    return howMuchTime;
}