const numbers = [1, 2, 3, 4, 5, 6, 7];
const evenNumber = numbers.filter(pickEvenNumber).reduce(even, 0);

function pickEvenNumber(val) {
  return val % 2 === 0;
}

function even(total, curr) {
  return total + curr;      
}


console.log(evenNumber);