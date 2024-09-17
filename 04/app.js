const years = [1980, 1934, 2002, 2019];


let today = new Date();
let yearNow = today.getFullYear();


function calculateYears(element){
    return yearNow - element;
}

const passedYears = years.map(calculateYears)
console.log(passedYears);


   
 


