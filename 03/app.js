const n = 24;
const oddNumbers = [];

for(let i=1; i<=n; i++) {
    if(i % 2 !== 0) {
        oddNumbers.push(i);
    }
}

console.log(oddNumbers);


// nie do końca rozumiem o co chodzi z tym sprawdzaniem warunków brzegowych

// przy 'n=0' miałem pustą tablicę []
// prz 'n=1' miałem [1]
// przy 'n=100' miałem liczby nieparzyste o 1 do 99

//plus przy .push wstawiłem nawiasy kwadratowe za pierwszym razem i nie ukrywam, że było to dla mnie problemem bo nie wiedziałem gdzie jest bład, a vsc nic nie podświetlał