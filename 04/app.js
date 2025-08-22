const years = [1980, 1934, 2002, 2019];

let userYear = 2022;

function yearDifferance(element) {

    return userYear - element;

};


const differenceArray = years.map(yearDifferance);
console.log(differenceArray);