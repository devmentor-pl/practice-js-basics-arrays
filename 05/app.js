const numbers = [1, 2, 3, 4, 5, 6, 7];

const sum = numbers.filter(filterEvenNumber).reduce(getSum);

function filterEvenNumber(number) {
    return number%2==0;
}

function getSum(total, element) {
    return total + element;
}

console.log(sum);