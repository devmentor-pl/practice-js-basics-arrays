console.log("n = 24: ", createOddNumbersArray(24))
console.log("-------------------------")

//Warunki brzegowe
console.log("n = 0: ", createOddNumbersArray(0))
console.log("-------------------------")

console.log("n = 1: ", createOddNumbersArray(1))
console.log("-------------------------")

console.log("n = 100: ", createOddNumbersArray(100))
console.log("-------------------------")

console.log("n < 0: ", createOddNumbersArray(-1))
console.log("-------------------------")

console.log("n = 'string': ", createOddNumbersArray("string"))
console.log("-------------------------")

function createOddNumbersArray(n) {
  const oddNumbers = []
  console.log(n)

  if (typeof n !== "number") {
    console.error("n must be number")
    return oddNumbers
  }

  if (n < 0) {
    console.error("value of n must be a non-negative number")
    return oddNumbers
  }

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      oddNumbers.push(i)
    }
  }
  return oddNumbers
}
