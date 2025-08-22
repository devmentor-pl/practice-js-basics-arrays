const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(function (num) {
    if (num % 2 === 0) {
        return num;
    }
});

const sum = evenNumbers.reduce(function (oldNum, newNum) {
    return oldNum + newNum;
});

console.log(evenNumbers);
console.log(`Suma liczb parzystych=${sum}`);