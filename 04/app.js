const years = [1980, 1934, 2002, 2019];

const diffYears = years.map((date) => {
    const today = new Date().getFullYear();
    return today - date;
})

console.log(diffYears);
