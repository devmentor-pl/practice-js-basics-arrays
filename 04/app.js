const years = [1980, 1934, 2002, 2019];

const date = new Date().getFullYear();

// 1.

const arr = [];

for (let i = 0; i < years.length; i++) {
	arr.push(date - years[i]);
}

// 2.

console.log(years.map(year => date - year));

console.log(arr);
