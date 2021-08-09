const users = [
	'Jan Kowalski',
	'Adam Kszczot',
	'Mamma Mia',
	'Soreno Italiano',
	'Giorgio Mareno',
];

console.log(`${users[0]} ${users[2]} ${users[4]}`);

// LUB //

users.forEach((user, i) => {
	if (i % 2 === 0) console.log(user);
});

console.log(users.length);
