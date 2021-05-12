const randomArray = createRandomArray();
console.log(randomArray);
// Pętla for
for(let j = 0; j < randomArray.length; j++){
    console.log(`Za pomocą pętli for - ${randomArray[j]}`);
}
// Pętla forEach
randomArray.forEach(item => console.log(`Za pomocą forEach - ${item}`));

//Ostatni element
console.log(`Ostatni element to ${randomArray[randomArray.length-1]}`); 



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