const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(function (item) {
    if (item % 2 === 0) {
        return item;
    }
})
console.log(evenNumbers);

// Musiałem chwilę pogłówkować nad zasadą działania reduce, ale przy wsparciu dokumentacji + podobnego pytania na slacku mniej więcej zrozumiałem jak działa ta metoda
const sumEvenNumbers = evenNumbers.reduce(function (total, num) {
    return total + num;
}, 0)

console.log(sumEvenNumbers);