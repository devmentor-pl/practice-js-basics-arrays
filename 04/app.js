const years = [1980, 1934, 2002, 2019];
const yearsFromNow = years.map(calcYears);
console.log(yearsFromNow);


function calcYears(element){
    const nowYear = new Date().getFullYear();
    return nowYear-element;
}