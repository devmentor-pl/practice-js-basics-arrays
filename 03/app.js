const n = 100;
const oddNumbers = [];


for (i=0; i<n; i++) {
    if(i % 2) {
        oddNumbers.push(i);
    }
}

oddNumbers.forEach(function (showElement) {
    console.log(showElement);
} )

console.log('Number of elements: ' + oddNumbers.length);