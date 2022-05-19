const years = [1980, 1934, 2002, 2019];

const now = 2022;

const difference = years.map(differenceFunction);

function differenceFunction(element) {
    return now - element
}


console.log(difference)