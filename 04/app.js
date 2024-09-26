const years = [1980, 1934, 2002, 2019];
const currentYear = 2023;

function subtractYears(number) {
    return currentYear - number;
}

const differences = years.map(subtractYears);

console.log(differences);
