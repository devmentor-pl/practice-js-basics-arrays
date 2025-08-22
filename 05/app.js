const numbers = [1, 2, 3, 4, 5, 6, 7];

const resultNumbers = numbers.filter(function(item) {
      return item % 2 === 0
});

const sumNumbers = resultNumbers.reduce(function(a, b) {
      return a + b
});



console.log(sumNumbers)