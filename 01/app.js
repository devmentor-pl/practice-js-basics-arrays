const users = ['Marta Stelmach',
    'Magdalena Kaczmarek',
    'Sylwia Lelonek',
    'Damian Zajączkowski',
    'Katarzyna Bortniczuk'];

for (i = 0; i < users.length; i++) {
    if (i % 2 === 0) {
        console.log(users[i]);
    }
}

console.log(users.length);