const years = [1980, 1934, 2002, 2019];

const passedYears = years.map(calcDifferenceYears);

console.log(passedYears);

function calcDifferenceYears(element) {
    const currentDate = 2021;
    const difference = currentDate - element;
    
    return difference;
}