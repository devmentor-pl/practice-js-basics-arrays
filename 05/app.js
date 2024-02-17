const numbers = [1, 2, 3, 4, 5, 6, 7];
const evenNumbers = [];
sortEvenNumbers(numbers);

function sortEvenNumbers(num) {
    if(num % 2 === 0) {
        evenNumbers.push(num);
    }
    return evenNumbers;
}

console.log(evenNumbers);

function getSum(arr) {
    let sum = 0;
    
    arr.forEach(function(i) {
        sum += i;
    }); 
    
    return sum;
}

const sumNumbers = getSum(numbers);
console.log(sumNumbers);
const sumEvenNumbers = getSum(evenNumbers);
console.log(sumEvenNumbers);


// // const evenNumbers = numbers.filter(sortEvenNumbers);

// // wyświetlanie elementów tablicy
// numbers.forEach( function(el) {
//     console.log(el);
// })
// // dodawanie 1 do kadego elementu tablicy
// let newArr = [];
// numbers.forEach( function(el) {
//     newArr.push(el + 1);
// })
// console.log(newArr);

// // zliczanie ilości liter w tablicy słów
// const stringArr = ['Kasia', 'Ania', 'Basia'];
// let letterSum = 0;
// stringArr.forEach( function(word) {
//     letterSum += stringArr.length + 1;
// })
// console.log(letterSum);