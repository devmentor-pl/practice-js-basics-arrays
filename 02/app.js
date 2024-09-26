const randomArray = createRandomArray();
// const valuesFromArray = getValuesFromArray(randomArray);
// console.log(valuesFromArray);
getValuesFromArray(randomArray);
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

function showValuesFromArray(value) {
    console.log(value);
}

function showLastElement(arr) {
    showValuesFromArray(arr[arr.length-1])
}

function getValuesFromArray(arr) {
    // for(let i = 0; i < arr.length; i++) {
    //     showValuesFromArray(arr[i]);
    // }
    arr.forEach(function(el) {
        showValuesFromArray(el);
    })
    showLastElement(arr);
}