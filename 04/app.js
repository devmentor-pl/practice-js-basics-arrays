const years = [1980, 1934, 2002, 2019];
const currYear = 2024;
const time = years.map(getDiff);
console.log(time);

function getDiff(num) {
  return currYear - num;
}
