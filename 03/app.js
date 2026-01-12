const n = 24;
const oddNumbers = [];

if (n <= 0) {
  console.log('Zmienna "n" jest mniejsza lub równa zeru!');
} else {
  for (let i = 0; i <= n; i++) {
    if (i % 2 !== 0) {
      oddNumbers.push(i);
    }
  }
};

oddNumbers.forEach((e, i) => {
  console.log(`Index: ${i}; Wartość: ${e}`);
});