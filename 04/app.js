const years = [1980, 1934, 2002, 2019];
const yearsBetween = years.map(substrYears);
console.log(yearsBetween);

function substrYears(element){
    return 2023 - element;
}