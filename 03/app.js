const n = 24;
const oddNumbers = [];



function pushNumber() {

    while(oddNumbers.length < n) {

        const randomNumber = Math.round( Math.random() * 100 );

        if ( !(randomNumber%2 === 0) ) {
            oddNumbers.push(randomNumber)
        }
    }
    console.log('The drawn numbers are' , oddNumbers);
}

pushNumber();





