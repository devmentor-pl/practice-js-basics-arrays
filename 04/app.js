const years = [1980, 1934, 2002, 2019];


let date =  new Date().getFullYear();
console.log(date);


const dateReminder = years.map(function(item){
    return date - item
})

console.log(dateReminder)