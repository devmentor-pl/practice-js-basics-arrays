const numbers = [1, 2, 3, 4, 5, 6, 7];

const result = numbers.filter(checkEvenNumbers);

const totalResult = result.reduce(sum);

function checkEvenNumbers(number){
    return number % 2 == 0;
}

function sum(total, num){
    return total + Math.round(num);
}


console.log(result);
console.log(totalResult);



