const randomArray = createRandomArray();
console.log(randomArray);

// PĘTLA FOR /////////////////////////////////////////////////////////////
let lastNumber = 0
for (let i = 0; i < randomArray.length; i++) {
    console.log(randomArray[i])
    lastNumber = randomArray[i]
}

console.log('Wartość ostatniego elementu tablicy wynosi: ', lastNumber)
// ///////////////////////////////////////////////////////////////////////


// forEach ///////////////////////////////////////////////////////////////
lastItem = 0
randomArray.forEach(function (item) {
    console.log(item)
    lastItem = item
})
console.log('Wartość ostatniego elementu tablicy wynosi: ', lastItem)



// ///////////////////////////////////////////////////////////////////////
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