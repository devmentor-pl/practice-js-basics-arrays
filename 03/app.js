const n = 24;
const oddNumbers = [];
if (n === 0) {
  console.log("0 is not an odd number");
}
for (let i = 1; i <= n; i++) {
  if (i % 2 !== 0) {
    oddNumbers.push(i);
  }
}

oddNumbers.forEach(function (e) {
  console.log(e);
});
