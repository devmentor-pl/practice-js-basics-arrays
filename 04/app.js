const years = [1980, 1934, 2002, 2019, 1, 60, 40];
const diff = years.map(function(date) {
    const today = new Date().getFullYear();
    return today - date;
})

console.log(diff)