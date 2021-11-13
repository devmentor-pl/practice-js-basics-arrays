const n = 24;
const oddNumbers = [];


function isOdd (n) {
  if( n % 2 === 1) {
    return true;
  }
  return false;
}
   function showOddNumbers(start, stop) {
     for(let i=start; i<stop; i++) {
       if(isOdd(i)) {
         console.log (i + 'jest nieparzysta');
       }
     }
   }

showOddNumbers(1,24);