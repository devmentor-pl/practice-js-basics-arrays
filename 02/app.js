const randomArray = createRandomArray();
console.log(randomArray);

for (let j = 0; j < randomArray.length; j++) {
    console.log('to jest for  ' + randomArray[j]);
}


randomArray.forEach(function(element){
    console.log('to jest forEach ' + element);
});

const lastIndex = randomArray.length - 1;
console.log('ostani element  ' + randomArray[lastIndex]);



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