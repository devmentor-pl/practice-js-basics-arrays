const years = [1980, 1934, 2002, 2019];

const differenceInYears = years.map(calc)

function calc (element) {
    const currentYear = 2022;
    let result = currentYear - element;
    return result
}

console.log(differenceInYears)