const years = [1980, 1934, 2002, 2019];
const date = new Date().getFullYear();

const years2 = years.map((element) => {
  return date - element;
});

console.log(years2);
