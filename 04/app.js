const years = [1980, 1934, 2002, 2019];
const date = new Date();
let year = date.getFullYear();


const yearsDiff = years.map(subDataFromActual);




yearsDiff.forEach(function (element) {
    console.log(element);
});





function subDataFromActual(element) {
    return year - element;
}


