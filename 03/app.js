const n = 24;
let oddNumbers = [];

let showOdd = (numberOfElements) => {

    for (let i = 1; i <= numberOfElements; i++) {

        if (i % 2 != 0) {
            oddNumbers.push(i);
        }

    }
    console.log(oddNumbers);
    oddNumbers = [];
}

showOdd(0);
showOdd(1);
showOdd(100);
showOdd(n);



