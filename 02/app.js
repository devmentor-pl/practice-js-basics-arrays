const randomArray = createRandomArray();
console.log(randomArray);

//Wyświetlenie wszystkich elementów:
// 1. przy pomocy pętli for
for (let i=0; i<randomArray.length; i++) {
    console.log(randomArray[i]);
};

// 2. przy pomocy metody tablicowej .forEach()
randomArray.forEach(function(item){
    console.log(item);
});

//Wyświetlenie wartości ostatniego elementu tablicy:
const lastIndex=randomArray.length-1;
console.log(randomArray[lastIndex]);

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