const numbers = [1, 2, 3, 4, 5, 6, 7];
const evenTotal = sumEven(numbers);

function sumEven(arr) {
  return arr.filter(isEven).reduce(function(a, b) {return a + b})
}

function isEven(num) {
  return num % 2 === 0
}

console.log(evenTotal)

// Teoretycznie można powyższe skrócić jeszcze bardziej, tylko tracimy możliwość wykorzystania funkcji isEven gdzieś indziej (zmniejsza się też czytelność :P):

function sumEven(arr) {
  return arr.filter(function(num) {return num % 2 === 0}).reduce(function(a, b) {return a + b})
}

console.log(evenTotal)
