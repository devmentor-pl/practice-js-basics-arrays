const years = [1980, 1934, 2002, 2019];

const yearsDifference = years.map(subtractionYears);

function subtractionYears(e) {
  const nowYear = new Date().getFullYear();
  return nowYear - e;
}

yearsDifference.forEach(function (e) {
  console.log(e);
});
