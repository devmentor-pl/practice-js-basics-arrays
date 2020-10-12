const users = ['Adam Kowalski', 'Michał Stasiak', 'Andrzej Wasilewski', 'Maria Nowak', 'Zofia Kowalska' ,'Barbara Nowakowska'];
const evenUsers =[];

evenIndex(users, evenUsers);
showEven(evenUsers);


function evenIndex(array, evenArray){
    for(let i=0; i<array.length; i++){
        if(i%2===1){
            evenArray.push(array[i]);
        }
    }
}

function showEven(array){
   array.forEach(element => {
        console.log(element);
    });
}


console.log('Długość tablicy to ' + users.length + ' elementów');