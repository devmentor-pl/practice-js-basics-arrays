const n = 24;
const oddNumbers = [];

const isOdd = (n) => n % 2 !== 0;

const populateArrayValues = (from, to) => {
  for (let i = from; i <= to; i++) {
    if (isOdd(i)) {
      oddNumbers.push(i);
    }
  }
};

populateArrayValues(1, n);

console.log(oddNumbers);
