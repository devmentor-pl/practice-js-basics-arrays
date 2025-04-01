const n = 24;

getOddNumbers(n);
getOddNumbers(0);
getOddNumbers(1);
getOddNumbers(100);

function getOddNumbers(n) {
  const oddNumbers = [];
  let counter = 0;
  while (n > counter) {
    counter++;
    if (counter % 2 == 1) {
      oddNumbers.push(counter);
    }
  }
  console.log(`n=${n} => ${oddNumbers}`);
}
