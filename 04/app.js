const years = [1980, 1934, 2002, 2019];

const now = 2022;

const difference = years.map(differenceFunction);

function differenceFunction(element) {
    return now - element
}


console.log(difference)

//2

const ages = years.map(function(item){
    return currYear - item
})

console.log(ages)

const currYear = (new Date().getFullYear())