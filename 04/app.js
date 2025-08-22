const years = [1980, 1934, 2002, 2019];


const yearsNew = years.map( yearsUntilToday);

console.log(years);
console.log(yearsNew);

function yearsUntilToday(years) {
    return 2022 - years;
}
