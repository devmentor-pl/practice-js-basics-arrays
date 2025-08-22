const years = [1980, 1934, 2002, 2019];
const timeDifference = years.map(function(el) {
    return new Date().getFullYear() - el;
});

console.log(timeDifference);
