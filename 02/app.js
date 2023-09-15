const randomArray = createRandomArray();
console.log(randomArray);

console.log('___Pętla for___');
for (let i = 0; i < randomArray.length; i++) {
  console.log(randomArray[i]);
}

console.log('___forEach()___');
randomArray.forEach(function (element, index) {
  console.log(randomArray[index]);
});

const lastIndex = randomArray[randomArray.length - 1];

console.log('Ostatni element tablicy: ' + lastIndex);
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
