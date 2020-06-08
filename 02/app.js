const randomArray = createRandomArray();
// console.log(randomArray);

for (let i = 0; i < randomArray.length; i++) {
    console.log('Wylosowana liczba to:' + ' ' + randomArray[i]);
}

randomArray.forEach(num => console.log(num));


let lastIndex = randomArray.length - 1;
console.log('Ostatnia wylosowana liczba to:' + ' ' + (randomArray[lastIndex]));



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