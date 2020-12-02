const n = parseInt(prompt('Podaj ilość ciągu !!!'));
const oddNumbers = [];

if (n === 0) {
    console.log('Podany ciąg jest równy zero !!!');
} else if (n <= 0) {
    console.log('Podany ciąg jest mniejszy od zera !!!');
} else {
    for (let i = 0; i <= n; i++) {

        if (i % 2 !== 0) {
            oddNumbers.push(i);
        }
    }
    console.log('Liczby nieparzyste: ' + oddNumbers);
}
