const years = [1980, 1934, 2002, 2019];

const currentDate = new Date().getFullYear();

const differenceTime = years.map( function (item) {
  return currentDate - item;
})

console.log(differenceTime);