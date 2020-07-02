const years = [1980, 1934, 2002, 2019];
const today = new Date().getFullYear();
const diff = years.map(getDiff)

function getDiff() {
    for (let i = 0; i < years.length; i++) {
        const result = today - years[i];
        console.log(result)
    }

};
console.log(diff)