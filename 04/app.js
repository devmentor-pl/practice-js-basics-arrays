const years = [1980, 1934, 2002, 2019];
let yearsDifference;
let yearsDifferences = [];
let today = new Date();
let currentYear = today.getFullYear();

//solution without .map()---------------------------------------------------------------

for (let i = 0; i < years.length; i++) {
    yearsDifference = currentYear - years[i];
    yearsDifferences.push(yearsDifference);
}

console.log('Solution without .map(): ' + yearsDifferences)

//solution with .map()------------------------------------------------------------------

let yearsDifferencesWithMap = years.map(function(year) {return currentYear - year;});

console.log('Solution with .map(): ' + yearsDifferencesWithMap)
