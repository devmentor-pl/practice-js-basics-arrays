const users = ["Adam kowalski", "Jan Brzoza", "Sandra Malinowska", "Nikola Matlik", "Wiktoria Wiśniowska"];

for(let i = 0; i < users.length; i++){
    if(i % 2 === 0){
        console.log(users[i])
    }
}
console.log("tablica zawiera: " + users.length + " elementów");