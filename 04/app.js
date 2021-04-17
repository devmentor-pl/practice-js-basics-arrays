const years = [1980, 1934, 2002, 2019];

const subtractionYears = years.map(function(element){
    const currentYear = new Date().getFullYear();
    return currentYear - element;
});

console.log(subtractionYears);




