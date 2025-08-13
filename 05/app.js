const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(filterFunction);

function filterFunction(num) {
    return num % 2 === 0;
}

const sumOfEvenNumbers = evenNumbers.reduce(getSum, 0);

function getSum(total, num) {
    return total + Math.round(num);
}

console.log("Sum of even numbers:", sumOfEvenNumbers);



console.log("________");
console.log("Na szczęście można tez krócej :D");



const shorterNotation = numbers.filter(num => num % 2 === 0).reduce((total, num) => total + num, 0);

console.log("Nie ma to jak funkcje strzałkowe:", shorterNotation);