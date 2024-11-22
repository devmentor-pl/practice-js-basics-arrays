const randomArray = createRandomArray();
console.log(randomArray);

console.log('pętla for');
showEveryElementArr(randomArray);
console.log('funkcja for each')
showEveryElementArr2(randomArray);
console.log('ostatni element tablicy =>', randomArray[(randomArray.length - 1)])

function showEveryElementArr(arr) {
    for(let i=0; i<arr.length; i++) {
        console.log(arr[i]);
    }
}

function showEveryElementArr2(arr) {
    arr.forEach(element => {
        console.log(element)
    });
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