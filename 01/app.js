const users = ['Alojzy Pancerfaust', 'Jan Nowak', 'Krzyszof Król', "Marek Ogarek", "Zdzisałw Kręcina"];
//console.log(users)
function showUsers(){
    console.log(users.length)
    for(let i= 0; i<users.length; i++)
    {
        if(i%2 === 0)
        console.log(users[i])
    }
}

showUsers();