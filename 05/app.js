const numbers = [1, 2, 3, 4, 5, 6, 7];

const numbersEven = numbers.filter(evenNumbers);

function evenNumbers(number) {
    return number % 2 == 0;
}

const sum = numbersEven.reduce((total, value) => total + value);
    console.log(sum);
