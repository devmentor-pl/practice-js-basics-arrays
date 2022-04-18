const randomArray = createRandomArray();
console.log(randomArray);

console.log('for loop');
for (let i = 0; i < randomArray.length; i++) {
    console.log(randomArray[i]);
}
console.log('forEach method');
randomArray.forEach(function(element) {
    console.log(element);
});

console.log("ostatni element tablicy", randomArray[randomArray.length - 1]);


// nie modyfikuj kodu poniżej!

// funkcję może deklarować poniżej wywołania
// ponieważ w JS występuje mechanizm tzw. hoisting-u

function createRandomArray() {
    const arr = [];
    const len = getRandomInteger(1, 10)
    for (let i = 0; i < len; i++) {
        arr.push(getRandomInteger(1, 100));
    }

    return arr;
}

function getRandomInteger(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}