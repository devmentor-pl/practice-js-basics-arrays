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

//task

console.log('wyświetlenie w konsoli wszystkich elementów randomArray za pomocą pętli FOR')

for (let i = 0; i < randomArray.length; i++) {
    console.log(randomArray[i])
}

console.log('wyświetlenie w konsoli wszystkich elementów randomArray za pomocą metody tablicowej forEach')

randomArray.forEach((el) => console.log(el));

//https://developer.mozilla.org/pl/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
console.log('Wyświetla elementy randomArray jako stringi')

const writer = {
    sb:       [],
    write:    function (s) {
        this.sb.push(s);
    },
    writeln:  function (s) {
        this.write(s + "\n");
    },
    toString: function () {
        return this.sb.join("");
    }
};

randomArray.forEach(writer.writeln, writer);
console.log(writer.toString());

console.log('Liczba elementów tablicy randomArray: ' + randomArray.length)