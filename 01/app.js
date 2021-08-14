const users = ["jan kowalski,john doe,kazimierz nowak,juliusz cezar,prometeusz,zeus"];

const newUsers = users[0].split(',');

console.log(newUsers.length);
console.log(newUsers.filter(el => el === "jan kowalski" || el === "prometeusz" || el === "kazimierz nowak"));