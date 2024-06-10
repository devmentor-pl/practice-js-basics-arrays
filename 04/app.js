const years = [1980, 1934, 2002, 2019];
const differenceYearsArr = [];

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

// console.log(currentYear);

years.forEach(function (el) {
	// console.log(el);
	const amountOfYears = currentYear - el;
	// console.log(amountOfYears);

	differenceYearsArr.push(amountOfYears);
});

console.log(differenceYearsArr);
