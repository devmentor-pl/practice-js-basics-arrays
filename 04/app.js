const years = [1980, 1934, 2002, 2019];

const time = years.map(subtraction)

function subtraction(element) {
    result = 2021 - element;
    return result
}

console.log(time)


time.forEach(function (showElement, index) {
    console.log(showElement + ' years past since ' + years[index]);
} )