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


for (let z=0; z<randomArray.length; z++) {

    console.log(randomArray[z]);

}

randomArray.forEach(function(el) {

    console.log(el);
    
});

console.log(randomArray[randomArray.length-1]);