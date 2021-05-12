const years = [1980, 1934, 2002, 2019];

const addNewArray = (arr, currentYear) => {
         return arr.map(item => currentYear - item)
        
}
console.log(addNewArray(years, 2021));

