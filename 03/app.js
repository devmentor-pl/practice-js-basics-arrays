const n = 24;
const oddNumbers = [];


for (let i = 0; i <= n; i++) {
      if (i % 2 !== 0) {
            oddNumbers.push(i)
      }
}


oddNumbers.forEach(function(elements){
      console.log(elements)
})
