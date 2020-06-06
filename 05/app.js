const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// funkcja sprawdza liczby patrzyste
const isEven = function (el) {
  if (el%2 === 0) {
    return el;
  }
}
// funkcja sumujaca
const sumArr = (a, b) => a+b;


// dlaczego nie mogę poniższego wiersza skutecznie wywołać powyżej funkcji?
// czy hoisting ma jakis wyjątek którego nie widzę?
const xxx = numbers.filter(isEven).reduce(sumArr);
console.log(xxx);
