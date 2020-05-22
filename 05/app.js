const numbers = [1, 2, 3, 4, 5, 6, 7];

function onlyEvenNr(even)
{
    return even%2 === 0;
}

const evenNumbers= numbers.filter(onlyEvenNr);
console.log(evenNumbers);

const sum = evenNumbers.reduce(function(acc, val)
{
    return acc + val;
})

console.log(sum);