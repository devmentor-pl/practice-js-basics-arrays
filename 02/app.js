const randomArray = createRandomArray();
// console.log(randomArray);

function showArrEl() {
  const arr = randomArray;
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
    arr.forEach(function(num) {console.log(num)});
    const lastElArr = arr.slice(-1);
    console.log(...lastElArr)
}

showArrEl(randomArray)

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
