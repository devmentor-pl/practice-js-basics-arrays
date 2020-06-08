const users = new Array("Wisława Szymborska", "Czesław Miłosz", "Lech Wałęsa", "Adam Małysz", "Papież Jan Paweł")

const users1 = ["Wisława Szymborska", "Czesław Miłosz", "Lech Wałęsa", "Adam Małysz", "Papież Jan Paweł", "Michał Milowicz"]
// console.log(users.length);
// console.log(users[0]);
// console.log(users[2]);
// console.log(users[4]);

const usersArr = Array.from(users);

for (let i = 0; i < usersArr.length; i++) {
  if (i % 2 !== 0) {
    console.log(usersArr[i]);
  }
};


// let printOddUsers = function() {
//   for (let i = 0; i < users.length; i++) {
//     if (user[i] % 1 === 0) {
//       console.log(user[i]);
//     }
//   }
// };
