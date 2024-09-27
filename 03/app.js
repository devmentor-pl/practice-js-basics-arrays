const n = 24;
const oddNumbers = [];
const num = getRandomNumber(1, 10);

for (let i = 0; i < num; i++) {
    oddNumbers.push(getRandomNumber(1, n));
};

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
};

console.log(oddNumbers);