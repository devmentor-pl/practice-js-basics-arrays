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

    /*rozwiązanie z pętlą for*/ 
    for (let i = 0; i <= 10; i++ ) {
        console.log(arr[i]);
    };

    /*rozwiązanie z forEach*/ 
    arr.forEach(function(element) {
        console.log(element);
    });

    return arr;
}

function getRandomInteger(min, max) {
    return Math.round(Math.random() * (max-min) + min);
}


