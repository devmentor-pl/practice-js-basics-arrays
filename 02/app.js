const randomArray = createRandomArray();
console.log(randomArray);

console.log("for loop:")
for (const i of randomArray) {
    console.log(i);
}

console.log("forEach:")
randomArray.forEach(function(item){
    console.log(item);
});

// console.log("Last array element: ", ...randomArray.splice(-1));
console.log("Last array element: ", randomArray[randomArray.length - 1]);

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