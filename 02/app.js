const randomArray = createRandomArray();
console.log(randomArray);



// nie modyfikuj kodu poniżej!

// funkcję może deklarować poniżej wywołania
// ponieważ w JS występuje mechanizm tzw. hoisting-u

function createRandomArray() {
    const arr = [];
    const len = getRandomInteger(1, 10)
    for(let i=0; i<len; i++) {
        arr.push( getRandomInteger(1, 100) );
    }

    return arr;
}

function getRandomInteger(min, max) {
    return Math.round(Math.random() * (max-min) + min);
}

console.log("Wyświetlanie elementów tablicy za pomocą pętli `for`:");
for (let i = 0; i < randomArray.length; i++) {
    console.log(randomArray[i]);
}

console.log("Wyświetlanie elementów tablicy za pomocą metody `.forEach()`:");
randomArray.forEach((element) => {
    console.log(element);
});

const lastElement = randomArray[randomArray.length - 1];
console.log("Ostatni element tablicy:", lastElement);