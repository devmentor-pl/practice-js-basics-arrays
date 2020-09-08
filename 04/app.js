const years = [1980, 1934, 2002, 2019];
const currYear = new Date().getFullYear();

// SPOSÓB 1
// const passedYears = years.map(countDiff);

// function countDiff(year) {
//   return currYear - year    
// }

// console.log(passedYears)
// ------------------------------

// 2 SPOSÓB - czyżby trochę lepszy z tej racji, że nie musimy za każdym razem stosować map? :)

const passedYears = countDiff(years)

function countDiff(arr) {
  return arr.map(function(year) {return currYear - year})};

console.log(passedYears)