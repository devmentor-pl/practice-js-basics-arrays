const years = [1980, 1934, 2002, 2019];
const now = new Date();
const thisYear = now.getFullYear();

const ages = years.map(difference);

function difference(number) {
  return thisYear - number;
}

console.log(ages);
