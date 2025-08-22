const years = [1980, 1934, 2002, 2019];

const newYears = years.map(countYears);

console.log(newYears);

function countYears(element) {
	return 2023 - element;
}
