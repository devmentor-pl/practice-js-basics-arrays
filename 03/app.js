function addOddNumbers(n) {
  const oddNumbers = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      oddNumbers.push(i);
    }
  }
  console.log(oddNumbers);
}
addOddNumbers(0);
addOddNumbers(1);
addOddNumbers(2);
addOddNumbers(100);
