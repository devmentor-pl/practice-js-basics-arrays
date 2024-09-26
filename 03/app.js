const n = 24;
const oddNumbers = [];
let newNum
let counter=0;

function createNumbers(){
   let number=Math.round(Math.random()*10);
   return number;
}


function createArray(){
newNum=createNumbers();

//jeżeli n jest większe od zera i newNum jest nie parzysta dodaj element do tablicy
if(n!==0){

   do{
   newNum=createNumbers();
 
      if(newNum%2 !== 0){
      oddNumbers.push(newNum);
       
      console.log("newNum wynosi: "+newNum);
      } 

   }while(oddNumbers.length<n)
   }
console.log("długość tablicy wynosi:  "+oddNumbers.length);


}

createArray();