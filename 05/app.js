//  Kiedy wykonujemy 'return' wewnątrz funkcji ?
// jest gdzieś błąd

const numbers = [1, 2, 3, 4, 5, 6, 7];
const evenNumbers = numbers.filter(sortEvenNumbers);

function sortEvenNumbers(numbers) {
    if(numbers % 2 === 0) {
        // evenNumbers.push(number);
    }
    return numbers;
    // return evenNumbers;
}