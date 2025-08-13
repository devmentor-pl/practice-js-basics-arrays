const years = [1980, 1934, 2002, 2019];

const pastYears = years.map(myFunction);

function myFunction(num) {
    return 2025 - num;
}
console.log("Lata które kolejno mineły od podanej daty:", pastYears);