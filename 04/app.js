const years = [1980, 1934, 2002, 2019];
let dateNow = new Date().getUTCFullYear();
let yearsPassed = years.map(function (e) {
	return dateNow - e;
});
console.log(yearsPassed);
