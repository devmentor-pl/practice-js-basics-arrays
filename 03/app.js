const n = 24;
const oddNumbers = [];
console.log(findOddNums(n))

function findOddNums(n) {
  let arr = [];
  if (n === 0) {
    console.log('0 is neither an odd nor an even number')
  }
  for (let i = 1; i <= n; i++) {
    if (ifOdd(i)) {
      arr.push(i)
    }
  }
  return arr
}

function ifOdd(num) {
  return num % 2 === 1
}