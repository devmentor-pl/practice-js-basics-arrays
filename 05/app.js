const numbers = [1, 2, 3, 4, 5, 6, 7];

function evenNumber(number) { //finds even number in the array
    return number % 2 == 0;
}
const evenArray = numbers.filter(evenNumber); // filters only even numbers in the array
console.log(evenArray);


function sumArray(prev, next) { // sums evenArray elements
    return prev + next;
}
const evenSumarray = evenArray.reduce(sumArray); // displays total summ of evenArray elemts
console.log(evenSumarray);