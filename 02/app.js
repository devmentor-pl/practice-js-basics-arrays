const randomArray = createRandomArray();

// Pętla for

for (let i = 0; i < randomArray.length; i++) {
	console.log(randomArray[i]);
}

// Pętla forEach

randomArray.forEach(item => console.log(item));

// Ostatni element

console.log(randomArray[randomArray.length - 1]);

console.log(randomArray);

// nie modyfikuj kodu poniżej!

// funkcję może deklarować poniżej wywołania
// ponieważ w JS występuje mechanizm tzw. hoisting-u

function createRandomArray() {
	const arr = [];
	const len = getRandomInteger(1, 10);
	for (let i = 0; i < len; i++) {
		arr.push(getRandomInteger(1, 100));
	}

	return arr;
}

function getRandomInteger(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}
