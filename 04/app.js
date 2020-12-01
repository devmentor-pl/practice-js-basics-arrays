const years = [1980, 1934, 2002, 2019, 1222];

const arrResult = years.map(subYears);
console.log(arrResult);


function subYears(element) {
    return 2020 - element;
}