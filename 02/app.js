const randomArray = createRandomArray();
console.log(randomArray);



// nie modyfikuj kodu poniżej!

// funkcję może deklarować poniżej wywołania
// ponieważ w JS występuje mechanizm tzw. hoisting-u

function createRandomArray() {
    const arr = [];
    const len = getRandomInteger(1, 10);

    for(let i=0; i<len; i++) {
        arr.push( getRandomInteger(1, 100) );

        console.log('Wyświetlam przy pomocy for' , arr[i]);
    }

    return arr;
}


function getRandomInteger(min, max) {
    return Math.round(Math.random() * (max-min) + min);
}


randomArray.forEach( function(element) {
    console.log('Wyświetlam przy pomocy forEach' , element)
});

console.log('ostatni element tablicy to:' , randomArray.slice(-1)[0]);

