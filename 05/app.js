const numbers = [ 1, 2, 3, 4, 5, 6, 7 ];

let z = numbers.filter((i) => i % 2 === 0).reduce((x, y) => {
	return x + y;
}, 0);
console.log(z);
