const years = [1980, 1934, 2002, 2019];

let date =  new Date().getFullYear();

years.forEach(year => {
    console.log(date - year);
});