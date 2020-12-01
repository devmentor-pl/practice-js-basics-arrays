const n = parseInt(prompt('Podaj ilość ciągu !!!'));
const oddNumbers = [];
const auxOddNumbers = [];

if (n === 0) {
    console.log('Podany ciąg jest równy zero !!!');
} else if (n <= 0) {
    console.log('Podany ciąg jest mniejszy od zera !!!');
} else {
    for (let i = 0; i <= n; i++) {
        auxOddNumbers[i] = i;
        if (auxOddNumbers[i] % 2 !== 0) {
            oddNumbers.push(auxOddNumbers[i]);
        }
    }
    console.log('Liczby nieparzyste: ' + oddNumbers);
}
