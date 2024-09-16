const n = 24;
const oddNumbers = [];

function createArryOdd() {
    const oddNumbers = getRandomInteger(0, n)
    for(let i=0; i<n; i++)  {
        oddNumbers.push( getRandomInteger(0, n) );
    }

    return oddNumbers %2 ===0;
}