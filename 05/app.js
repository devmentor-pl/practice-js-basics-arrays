const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(function(el) {
    return el % 2 === 0
})

console.log("Tablica z liczbami parzystymi", evenNumbers);

const sumEvenNumbers = evenNumbers.reduce(function(a, b) {
    return a + b;
}, 0);

console.log("Suma liczb parzystych to", sumEvenNumbers);