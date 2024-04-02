const users = ['name1 surname1', 'name2 surname2', 'name3 surname3', 'name4 surname4', 'name5 surname5'];

users.forEach(oddNames);

console.log(users.length);

function oddNames(name, index) {
    if ((index + 1) % 2) {
        console.log(name);
    }
}