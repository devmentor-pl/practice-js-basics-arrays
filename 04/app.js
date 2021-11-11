const years = [1980, 1934, 2002, 2019];
const yearsResult = years.map(checkYears);
console.log("Start tablica: " + years);
console.log("Nowa tablica: " + yearsResult);

function checkYears(element, index){
    return element = 2021 - element;
}
