const numbers = [1, 2, 3, 4, 5, 6, 7];
const evenNumbers = [];

numbers.forEach(function(element) {
    if(!(element % 2)) {
        evenNumbers.push(element);
    }
})


if (evenNumbers.length) {
    console.log('Suma wynosi:', evenNumbers.reduce(function(a, b) {
        return a + b;
    }));
} else {
    console.log('Tablica jest pusta');
}
