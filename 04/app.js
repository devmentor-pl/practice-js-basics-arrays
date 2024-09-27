const years = [1980, 1934, 2002, 2019];
const temp = years.map(function (y) {
    console.log(y);
    return 2023 - y;
});
console.log(temp);
