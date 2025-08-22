const years = [1980, 1934, 2002, 2019];
const presentYear = new Date().getFullYear();

const pastYears = years.map(function (item) {
	return presentYear - item;
});

console.log(pastYears);
