const users = ['Anna Nowak', 'Grzegorz Bak', 'Pawel Niedzielski', 'Roman Czyz', 'Roman Polak', 'Pawel Rak', 'Roman Cos'];

users.forEach(function (element, index) {
    if(index === 0 || index === 2 || index === 4) {
        console.log('Imię i nazwisko użytkownika nr', index + 1, 'to', element);
    }
});

console.log('W tablicy zapisano', users.length, 'użytkowników');