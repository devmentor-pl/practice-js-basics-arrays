const years = [1980, 1934, 2002, 2019];

const integers = years.map( parseNumbersToInt );
console.log(integers);

function parseNumbersToInt(array) {
    return parseInt(array)
}

const subtracted = integers.map( subtr );
console.log(subtracted);

function subtr(element) {
    return 2020 - element;
}
       