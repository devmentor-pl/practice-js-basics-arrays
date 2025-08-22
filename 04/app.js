const currentYear = new Date().getFullYear();

const years = [1980, 1934, 2002, 2019];

const goneYears = years.map(calculateGoneYears);

function calculateGoneYears(el, i) {
	return currentYear - years[i];
}

console.log(goneYears);
