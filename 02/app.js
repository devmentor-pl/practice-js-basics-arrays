const randomArray = createRandomArray()
console.log(randomArray)
console.log("last arr element: ", randomArray[randomArray.length - 1])

for (let i = 0; i <= randomArray.length - 1; i++) {
    console.log("For Loop:", randomArray[i])
}

randomArray.forEach(function (element) {
    console.log("forEach Loop: ", element)
})

// nie modyfikuj kodu poniżej!

// funkcję może deklarować poniżej wywołania
// ponieważ w JS występuje mechanizm tzw. hoisting-u

function createRandomArray() {
    const arr = []
    const len = getRandomInteger(1, 10)
    for (let i = 0; i < len; i++) {
        arr.push(getRandomInteger(1, 100))
    }

    return arr
}

function getRandomInteger(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}