const years = [1980, 1934, 2002, 2019, 2000];


const howManyYearsPassed = function(year) {
  let currYear = new Date().getFullYear();
  return currYear - year;
}

let result = years.map(howManyYearsPassed);
console.log(result);
