const n =24;
const oddNumbers = [];

while(oddNumbers.length<n){
    randomNumber=Math.round(Math.random()*100);
    if(randomNumber%2!==0&oddNumbers.length<=n) {
    oddNumbers.push(randomNumber)};
}