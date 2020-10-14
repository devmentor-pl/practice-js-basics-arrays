const users = ['Adam Kowalski', 'Michał Stasiak', 'Andrzej Wasilewski', 'Maria Nowak', 'Zofia Kowalska', 'Barbara Nowakowska'];
const oddUsers = [];

oddIndex(users, oddUsers);
showArray(oddUsers);


function oddIndex(array, evenArray) {
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 1) {
            evenArray.push(array[i]);
        }
    }
}

function showArray(array) {
    array.forEach(element => {
        console.log(element);
    });
}


console.log('Długość tablicy to ' + users.length + ' elementów');