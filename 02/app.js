const randomArray = createRandomArray();
console.log(randomArray);

// SOLUTION WITH FOR LOOP

function showNumbersForLoop(ar) {
  for (let j = 0; j < ar.length; j++) {
    console.log(`For loop element: ${ar[j]}`);
  }
}
showNumbersForLoop(randomArray);

// SOLUTION WITH ForEach()

function showNumbersForEach(ar) {
  ar.forEach((item) => console.log(`ForEach element: ${item}`));
}
showNumbersForEach(randomArray);

// LAST ELEMENT FROM ARRAY

function showLastNumber(ar) {
  console.log(`Last element from Array: ${ar[ar.length - 1]}`);
}

showLastNumber(randomArray);

// nie modyfikuj kodu poniżej!

// funkcję może deklarować poniżej wywołania
// ponieważ w JS występuje mechanizm tzw. hoisting-u

function createRandomArray() {
  const arr = [];
  const len = getRandomInteger(1, 10);
  for (let i = 0; i < len; i++) {
    arr.push(getRandomInteger(1, 100));
  }

  return arr;
}

function getRandomInteger(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
