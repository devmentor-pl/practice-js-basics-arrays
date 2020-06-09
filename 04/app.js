const years = [1980, 1934, 2002, 2019];

let calculateYears = function (year) {

    let currentYear = new Date().getFullYear();
    return currentYear - year;
}

let resultYears = years.map(calculateYears);
console.log(resultYears)

/*zapytać o year*/