const n = 24;
const oddNumbers = [];

function getOddNumbers() {
  for(let i = 0; i <= n; i++) {
    if(i % 2 !== 0) {
      oddNumbers.push(i)
    }
  }
  return oddNumbers;
}

getOddNumbers();
console.log('Liczby nieparzyste w określonej wartiości to:');
console.log(oddNumbers);