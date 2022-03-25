const numbers = [1, 2, 3, 4, 5, 6, 7];


function evenNumbers(number){
    return number % 2 === 0;
}

const numbers2 = numbers.filter(evenNumbers);

const numbers3 = numbers2.reduce(function(a, b) {
    return a + b;
})

console.log(numbers3);
