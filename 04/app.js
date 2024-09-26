const years = [1980, 1934, 2002, 2019];
const yearsGap = years.map(gapCalculation)
console.log(yearsGap)

function gapCalculation(element, index, array) {
    const gap = 2022 - parseInt(element)
    return gap
}


// rozwiązanie drugie
const yearsGap2= years.map(x=> 2022-x)
console.log(yearsGap2)