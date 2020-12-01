const users = ['Dawid Pietraszko', 'Robert Pietrasik', 'Jan Kowal', 'Iza Basa', 'Ola Lek', 'Krystian Jaki', 'Szymon Dodak', 'Monika Robot', 'Klaudia Byk'];
const usersResult = [];

for (let i = 0; i < users.length; i++) {
    if (i % 2 !== 0) {
        usersResult.push(users[i]);
    }
}
console.log('Użytkownicy: ' + usersResult);
console.log('Tablica użytkowników wynosi: ' + users.length);
console.log('Tablica wynikowa (do drugi użytkownik) wynosi: ' + usersResult.length);
