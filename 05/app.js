const numbers = [1, 2, 3, 4, 5, 6, 7];

const evenNumbers = numbers.filter(even);

function even(index) {
  return index % 2 === 0;
}

const sumNumbers = evenNumbers.reduce(sum);

function sum(total, num) {
  return total + num;
}

console.log("Nowa tablica z liczbami parzystymi: ", evenNumbers);
console.log("Suma wszystkich liczb parzystych: ", sumNumbers);
