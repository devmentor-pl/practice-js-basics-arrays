const years = [1980, 1934, 2002, 2019];

const newYears = years.map(year => 2023 - year);
console.log(newYears);

// const calcDifference = (pastYears, yearAsValue, array) => {
// 	array.push(pastYears, yearAsValue);

// 	const differenceBetweenYears = array.reduce((accumulator, currentValue) => accumulator - currentValue);
// 	const newArray = array.map(year => {
// 		return year;
// 	});
// 	newArray.unshift(Math.abs(differenceBetweenYears));

// 	return  newArray;
// };
// console.log(calcDifference(years[3], 2000, newYears));
