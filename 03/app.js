// const n = 24;

const userInput = prompt('podaj liczbe ograniczajca tabele n');
const n = Number(userInput);

const oddNumbers = [];

function oddNumbersArray (array) {
  for (let i=0; i <= n; i++) {
    if (i % 2 !== 0) {
      array.push(i);
    }
  }
  console.log(array);
}

oddNumbersArray(oddNumbers)


