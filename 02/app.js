const randomArray1 = createRandomArray()
const randomArray2 = createRandomArray()
// console.log(randomArray);

console.log("Wyniki pętli for:")
for (let i = 0; i < randomArray1.length; i++) {
  console.log(randomArray1[i])
}
console.log(
  "Ostatni element tablicy for:",
  randomArray1[randomArray1.length - 1]
)

console.log("----------------------")
console.log("Wyniki metody forEach: ")
randomArray2.forEach((element) => console.log(element))

console.log("----------------------")
console.log(
  "Ostatni element tablicy forEach:",
  randomArray2[randomArray2.length - 1]
)

// nie modyfikuj kodu poniżej!
// funkcję możesz deklarować poniżej wywołania
// ponieważ w JS występuje mechanizm tzw. hoisting-u

function createRandomArray() {
  const arr = []
  const len = getRandomInteger(1, 10)
  for (let i = 0; i < len; i++) {
    arr.push(getRandomInteger(1, 100))
  }

  return arr
}

function getRandomInteger(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}
