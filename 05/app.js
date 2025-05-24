const numbers = [1, 2, 3, 4, 5, 6, 7];
const evenNumbers = getEvenNumbers(numbers);
const sum = getSum(evenNumbers);
console.log(sum);


function getEvenNumbers(arr) {
    const evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}

function getSum(arr) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
        sum += arr[j]
    }
    return sum;
}
