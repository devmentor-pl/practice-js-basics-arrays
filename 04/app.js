const years = [1980, 1934, 2002, 2019];

const nowYear = (new Date()).getFullYear()

const difference = years.map(function(item) {
    return nowYear - item;
})

console.log(difference)