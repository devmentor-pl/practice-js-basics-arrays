const n = 24;
const oddNumbers = [];

function fillArray(num) {
  for (let i = 0; i <= num; i++) {
    let oddNum = i % 2;
    if (oddNum) {
      oddNumbers.push(i);
    }
  }
}

fillArray(n);
console.log(oddNumbers);
