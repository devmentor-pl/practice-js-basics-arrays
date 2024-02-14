const years = [1980, 1934, 2002, 2019];
const n = 2023;

const newYears = years.map(showTimeLapse);
console.log(newYears);

function showTimeLapse(element) {
    let newElement = 0;
    newElement = n - element; 

    return newElement;
}