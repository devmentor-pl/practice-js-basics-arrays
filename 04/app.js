const years = [1980, 1934, 2002, 2019];

const passedYears = years.map(function(year){
 return 2023 - year;
}
);
console.log(passedYears);