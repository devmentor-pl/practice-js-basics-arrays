const randomArray = createRandomArray();
console.log(randomArray);

// wyświetlenie wszystkich elementów przy uzyciu pętli for oraz wyświetlenie ostatniego elementu

for(i = 0; i < randomArray.length; i ++) {
    console.log(randomArray[i]);
}

const lastNumber = randomArray[randomArray.length -1];
console.log(lastNumber, 'ostatni element');

// wyświetlenie wszystkich elementów przy uzyciu .forEach()

randomArray.forEach(function(element, index) {
    console.log(element, ' => ', index)
});

// 2-ga wersja
function showItemsOfArray(item) {
    console.log(item);
}

randomArray.forEach(showItemsOfArray);


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
