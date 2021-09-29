const years = [1980, 1934, 2002, 2019];
const now = new Date();
const currentDate = now.getFullYear();


const yearsNumber = years.map( operation );

function operation(number) {
    return currentDate - number;
}

console.log(yearsNumber);

