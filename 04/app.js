const years = [1980, 1934, 2002, 2019];

const calculationOfYearsGoneBy = years.map(function (year) {
  const currentYear = new Date().getFullYear()

  return currentYear - year
})

console.log(years)
console.log(calculationOfYearsGoneBy) 
