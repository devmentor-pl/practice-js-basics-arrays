
let users = ['Gieniek Kowal', 'Zosia Kowal', 'Janusz Stelmach', 'Grażyna Stelmach', 'Sebastian Tworek', 'Mariola Tworek', 'Ewelina Kamieniarz', 'Tadeusz Kamieniarz', 'Barbara Cieśla', 'Marian Cieśla'];

for (let i = 0; i < users.length; i ++) {
    if (i == 0 || i == 2 || i == 4) {
        console.log(users[i])
    }
}

console.log('Liczba elementów tablicy users: ' + users.length)