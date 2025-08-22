const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbersSum = numbers.filter(function(number) {
    return number % 2 === 0;
})

.reduce(function(sum, number) {
    return sum + number;
});

console.log(evenNumbersSum);


// jesli dobrze to rozumiem to .reduce() dodaje do siebie wszystkie elementy tablicy i zwraca je jako jedną wartość??

// czy raczej dodaje wszystkie elementy tablicy do pierwszego elementu (accumulator)??