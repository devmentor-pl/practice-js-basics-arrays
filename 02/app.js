const randomArray = createRandomArray();
// console.log(randomArray);
const showForArray = showFor(randomArray);
console.log('-----');
const showForEachArray = showForEach(randomArray);
console.log('-----');
console.log('Ostatni element: ' + randomArray[randomArray.length-1]);

function showFor(array){
    for(let i=0; i<array.length; i++){
        console.log(array[i]);
    }
}

function showForEach(array){
    array.forEach(function(element){
        console.log(element);
    }
    )
}



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