const randomArray = createRandomArray();
console.log(randomArray);

function printArray(array) {
  console.log('funkcja na pętli for:')
  const length = array.length;
	for (let i = 0; i < length; i++) {
		console.log(array[i]);
	}
  console.log("długośc tablicy: " + length);
}

printArray(randomArray);

// forEach

function printArray2(array) {
  console.log('funkcja na pętli forEach:')
  const len = array.length;
  array.forEach(el => console.log(el));
  console.log("długośc tablicy: " + len);
}

printArray2(randomArray);

// nie modyfikuj kodu poniżej!

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

// - Funkcja `getRandomInteger` losuje liczby całkowite z przedziału, który został zdefiniowany przez parametry.
// - Funkcja `createRandomArray` tworzy tablicę o losowej liczbie elementów (od 1 do 10). Elementami tymi są losowe liczby z przedziału od 1 do 100.

/*
Zwróć uwagę, że każda z funkcji wykonuje jedno konkretne zdanie. Tak należy je budować. Zauważ również, że funkcja `getRandomInteger` jest wykorzystywana w 2 miejscach. To był prawdziwy powód jej utworzenia. Zamiast w obu miejscach powielać kod, umieściłem go w jednej funkcji i to ją wykorzystałem dwukrotnie.
*/

/* 
Tym razem Twoim zadaniem będzie wyświetlenie w konsoli wszystkich elementów tablicy:
- najpierw przy pomocy pętli `for`,
- potem przy pomocy metody tablicowej `.forEach()`.

Dodatkowo – już poza pętlą – wyświetl wartość ostatniego elementu tablicy. Pamiętaj, że po każdym odświeżeniu strony długość tablicy będzie inna. Twój kod powinien działać prawidłowo po każdym ponownym uruchomieniu strony.
*/
