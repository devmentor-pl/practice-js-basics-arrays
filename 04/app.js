const years = [1980, 1934, 2002, 2019];

function findDiffrence(year) {
    return 2024 - year
}

const newMap = years.map(findDiffrence)

for(let i = 0; i < newMap.length; i++) {
    console.log(newMap[i])
}

