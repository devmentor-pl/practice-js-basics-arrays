const years = [1980, 1934, 2002, 2019];

const numbersOfYears = years.map(calcNumberOfYears);

function calcNumberOfYears(element, index, array){
    const currentYear = new Date().getFullYear();
    return currentYear - element;
}

console.log(numbersOfYears)

